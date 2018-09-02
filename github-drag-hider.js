// ==UserScript==
// @name         Github drag disable
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Disable github 'drop to reorder' icon
// @author       wjjwkwindy
// @match        *://github.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var iconCss = document.createElement('style');
    iconCss.type = 'text/css';
    iconCss.innerText = '.hide-drag{width:40px;height:20px;border:1px solid rgb(255, 73, 73);background-color:rgb(255, 73, 73);border-radius:10px;box-sizing:border-box;margin-right:5px;position:relative;top:4px;float:right;cursor:pointer}.hide-drag:after{content:"";width:16px;height:16px;background-color:#fff;border-radius:100%;position:absolute;top:.5px;left:1px;transition:.3s}.active{border:1px solid #13ce66;background-color:#13ce66;}.active:after{left:20px}';
    document.getElementsByTagName('head')[0].appendChild(iconCss);

    var dragIconElem = document.getElementsByClassName('pinned-repository-handle');
    var prElem = document.getElementsByClassName('js-pinned-repos-reorder-container')[0];
    var prH2Elem = prElem.childNodes[3];
    if (prElem.innerText.indexOf('Customize your pinned repositories') != -1) {
        var hideDrag = document.createElement('span');
        hideDrag.setAttribute('class', 'hide-drag');
        hideDrag.setAttribute('data-allowDrag', 'true');
        prH2Elem.appendChild(hideDrag);
    }

    function initSetting() {
        var dragSetting = localStorage.getItem('allowDrag');
        if (dragSetting) {
            setDragIconElem(dragSetting);
        } else {
            console.log('can\'t find localStorage');
            setDragIconElem('true');
        }
    }

    function setDragIconElem(operate) {
        if (operate == 'true') {
            hideDrag.classList.add('active');
            localStorage.setItem('allowDrag', 'true');
        } else {
            hideDrag.classList.remove('active');
            localStorage.setItem('allowDrag', 'false');
        }
        hideDrag.setAttribute('data-allowDrag', operate);
        for (let i = 0; i < dragIconElem.length; i++) {
            dragIconElem.item(i).style.display = (operate == 'true') ? 'block' : 'none';
        }
    }

    window.onload = initSetting();

    hideDrag.onclick = function () {
        console.log('you clicked hide-drag');
        if (hideDrag.getAttribute('data-allowDrag') == 'true') {
            // 隐藏拖动按钮
            setDragIconElem('false');
        } else {
            // 显示拖动按钮
            setDragIconElem('true');
        }
    };

})();
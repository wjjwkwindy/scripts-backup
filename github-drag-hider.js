// ==UserScript==
// @name         Github drag disable
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disable github drap to reorder icon
// @author       wjjwkwindy
// @match        *://github.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var css=document.createElement('style');
    css.type='text/css';
    css.innerText='.hide-drag{width:40px;height:20px;border:1px solid #13ce66;background-color:#13ce66;border-radius:10px;box-sizing:border-box;margin-right:5px;position:relative;top:4px;float:right;cursor:pointer}.hide-drag:after{content:"";width:16px;height:16px;background-color:#fff;border-radius:100%;position:absolute;top:1px;left:1px;transition:.3s}.active:after{left:20px}';
    document.getElementsByTagName('head')[0].appendChild('css');

    var dragIconElem = document.getElementsByClassName('pinned-repository-handle');
    var prElem = document.getElementsByClassName('js-pinned-repos-reorder-container')[0];
    var prH2Elem = prElem.childNodes[3];
    if (prElem.innerText.indexOf('Pinned repositories') != -1) {
        var hideDrag = document.createElement('span');
        hideDrag.setAttribute('class', 'hide-drag active');
        prH2Elem.appendChild(hideDrag);
    }

    hideDrag.onclick = function () {
        console.log('you clicked hide-drag');
        for (let i = 0; i < dragIconElem.length; i++) {
            dragIconElem.item(i).style.display = (dragIconElem.item(i).style.display == 'none') ? 'block' : 'none';
        }
    };
})();
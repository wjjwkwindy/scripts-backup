// ==UserScript==
// @name         Github drag disable
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disable github drap to reorder
// @author       wjjwkwindy
// @match        *://github.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var dragIcon = document.getElementsByClassName('pinned-repository-handle');
    var pinnedRepositories = document.getElementsByClassName('js-pinned-repos-reorder-container')[0];
    var pinnedRepositoriesH2 = pinnedRepositories.childNodes[3];
    if (pinnedRepositories.innerText.indexOf('Pinned repositories') != -1) {
        var hideDrag = document.createElement('button');
        hideDrag.innerText = 'click to hide drag';
        hideDrag.setAttribute('class', 'hide-drag');
        pinnedRepositoriesH2.appendChild(hideDrag);
    }
    hideDrag.onclick = function () {
        console.log('you clicked hide-drag');
        for (let i = 0; i < dragIcon.length; i++) {
            dragIcon.item(i).style.display = (dragIcon.item(i).style.display == 'none') ? 'block' : 'none';
        }
    };
})();
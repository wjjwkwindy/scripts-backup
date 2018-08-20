// ==UserScript==
// @name         bilibili special focus
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Add my-subscribe link on nav.
// @author       wjjwkwindy
// @match        https://t.bilibili.com/
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    let feedCard = document.getElementsByClassName('feed-card')[0],
        specialList = [
        '口水叽大王',
        'PT傅豪物理治疗',
        'ForwardFit毛毛',
        'NowFitness',
    ];

    function inSpecialList(content) {
        return specialList.some(function (i) {
            if (!i) return false;
            i = i.trim();
            return content.indexOf(i) != -1;
        });
    }

    function addMark() {
        feedCard.querySelectorAll('.content .card').forEach(function (element) {
            let content = element.innerText;
            if (inSpecialList(content)) element.style.boxShadow = '-5px 0px 0px #ffdc72';
        });
    }

    function throttle(doSomething, wait) {
        var _this,
            _arguments,
            initTime = 0;
        return function () {
            var now = +new Date();
            _this = this;
            _arguments = arguments;
            if (now - initTime > wait) {
                console.log('执行addMark()');
                doSomething.apply(_this, _arguments);
                initTime = now;
            }
        }
    }

    document.onscroll = throttle(addMark, 1000);
})();
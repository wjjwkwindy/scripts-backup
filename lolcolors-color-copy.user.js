// ==UserScript==
// @name         lolcolors.com 颜色复制
// @namespace    http://co2oc.com/
// @version      0.1
// @description  lolcolors.com 点击复制十六进制颜色
// @author       wjjwkwindy
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHfSURBVHhe7dsxMkNhFMXxaBQ6nQqlUZlhCbagsQBboLYEhU5lARR2oLYEjJVwjuSZJ07yXt693/cu7p35TTK5z3yZ/ySTFDGpMG/w7uwBmtmY3Yad0gFuYXd6N+aUDvAIrxA2Qo0AfCxshFoBKGSEmgEoXITaAShUhCeYf4JWXQEoTIRteAH1JIfqE4D+bIS+AagzwnMBl9DM2uzWM8IqAWhpBPUHVtfQzBWsT++6RVg1AC2MoC62agfgp8A9eEYYEoBkBHWh1XwAPuYZYWgA+hFBXWSlApBXBEsA+hZBXWC1KAB5RGgHOILjAfbhc9QBVssCkDVCO4B51AFWXQGoHWEHVonAl/2hgy2QB1j1CUCWCB4uQC6s+gagMSOECEBjRQgTgMaIECoA3UHNCOECUM0IIQNQrQhVApzC2QBf39QwB6DOsaoSwGP4bVGdY1UswA1sOmjeBr8ugBe+fTgZANTeKgOAXESRAYCTAUDtrTIAyEUUGQA4GQDU3ioDgFxEkQGAkwFA7a0yAMhFFBkAOBkA1N4qA4BcRJEBgJMBQO2tMgDIRRQZADj/PgD/MeqkgD2QB0fRBCg66uAoMgAUH3VwFBkAio86OIoMAMVHHRxFBoDicx5Y+5diBWYy+QANFyXdECjWfQAAAABJRU5ErkJggg==
// @match        *://www.webdesignrankings.com/resources/lolcolors/
// @match        *://www.lolcolors.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // lolcolors.com
    // 点击水滴状的颜色，复制十六进制颜色
    var el = document.getElementsByClassName('droplet');
    for (var i = 0; i < el.length; i++) {
        el[i].onclick = function (event) {
            event.preventDefault();

            // 获取颜色值
            var color=this.nextElementSibling.textContent;

            // 复制到剪切板
            var oInput = document.createElement('input');
            oInput.value = color;
            document.body.appendChild(oInput);
            // 选择对象
            oInput.select();

            // 执行浏览器复制命令
            document.execCommand("Copy");

            oInput.className = 'oInput';
            oInput.style.display='none';

            console.log('已经复制到剪贴板:'+color);
        };
    }
})();
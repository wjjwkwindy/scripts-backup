// ==UserScript==
// @name         bilibili plus
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add my-subscribe link on nav.
// @author       wjjwkwindy
// @match        https://*.bilibili.com/*
// @grant        none
// ==/UserScript==
var Id,
    navElem,
    subscribe;

(function mainFuc() {
    try {
        addNavItem();
    } catch (error) {
        console.log('error:' + error.message);
    } finally {
        Id = setTimeout(addNavItem, 1000);
    }
})();

function addNavItem() {
    navElem = document.getElementsByClassName('nav-con fr')[0].childNodes[0];
    subscribe = document.createElement('li');
    subscribe['report-id'] = 'playpage_VIP';
    subscribe.className = 'nav-item';
    subscribe.innerHTML = '<a href="https://space.bilibili.com/1890833/#/fans/follow" target="_blank" class="t">我的关注</a>';
    navElem.insertBefore(subscribe, navElem.childNodes[1]);
    clearTimeout(Id);
}
// ==UserScript==
// @name         bilibili plus
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Add my-subscribe link on nav.
// @author       wjjwkwindy
// @match        https://*.bilibili.com/*
// @grant        none
// ==/UserScript==
var Id,
    count = 0,
    navElem,
    subscribe;

(function mainFuc() {
    handle();
})();

function handle() {
    try {
        addNavItem();
    } catch (error) {
        count++;
        console.log('error:' + error.message);
        if (count <= 2) {
            Id = setTimeout(handle, 1000);
        } else {
            console.log('超时');
        }
    }
}

function addNavItem() {
    navElem = document.getElementsByClassName('nav-con fr')[0].childNodes[0];
    subscribe = document.createElement('li');
    subscribe['report-id'] = 'playpage_VIP';
    subscribe.className = 'nav-item';
    subscribe.innerHTML = '<a href="https://space.bilibili.com/1890833/#/fans/follow" target="_blank" class="t">我的关注</a>';
    navElem.insertBefore(subscribe, navElem.childNodes[1]);
    clearTimeout(Id);
    console.log('添加成功，清除timeoutID:' + Id);
}
// ==UserScript==
// @name         Kill "Google offered in"
// @namespace    http://co2oc.com/
// @version      1.0
// @description  Kill "Google offered in" conent at google homepage.
// @author       wjjwkwindy
// @match        https://www.google.com/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let SIvCob = document.getElementById('SIvCob');
    if (SIvCob.style) {
        // 删除'Google offered in'元素
        SIvCob.parentNode.removeChild(SIvCob);
    }

    let bodyInnerHtml = document.body.innerHTML;
    // 检查是否删除成功
    if (bodyInnerHtml.indexOf('Google offered in') != -1) {
        // 删除失败，尝试方案2
        console.log('Find \'google offered in\'.');
        console.log('Kill Fail. Trying another way.');
        let mainContent = document.getElementById('main');
        mainContent.children[0].children[0].lastChild.style.display = 'none';
    } else {
        // 删除成功
        console.log('Can\'t find \'google offered in\'.');
        console.log('Kill Success!');
    }
})();
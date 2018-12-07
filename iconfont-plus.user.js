// ==UserScript==
// @name         Iconfont 一键添加
// @namespace    http://co2oc.com/
// @version      1.0
// @description  Iconfont 一键添加所有图标
// @author       wjjwkwindy
// @match        http://www.iconfont.cn/collections/detail?*
// @grant        none
// ==/UserScript==
let Id,
  count = 0,
  iconContainer,
  addProgress;
(function() {
  "use strict";
  handle();
})();

function handle() {
  try {
    getIconContainer();
  } catch (error) {
    count++;
    console.log("error:" + error.message);
    if (count <= 5) {
      Id = setTimeout(handle, 1000);
    } else {
      console.log("超时");
    }
  }
}

function getIconContainer() {
  iconContainer = document.getElementsByClassName("block-radius-btn-group")[0];
  iconContainer.innerHTML +=
    '<span title="一键添加" id="w-addAllIcons" class="iconfont radius-btn radius-btn-money" p-id="6271" style="font-size: 10px;background: #38a3fd;;">一键添加</span><span title="添加进度" id="w-addProgress" class="iconfont radius-btn radius-btn-money" p-id="6271" style="font-size: 10px;background: #38a3fd;border-radius: 15px;height: 30px;line-height: 30px;top: 11px;cursor: text;">0</span>';
  clearTimeout(Id);
  console.log("添加成功，清除timeoutID:" + Id);
  addProgress = document.getElementById("w-addProgress");
  document.getElementById("w-addAllIcons").addEventListener("click", function() {
    addProgress.innerText = "添加中...";
    addAllIcons();
  });
}

function addAllIcons() {
  const btn = document.getElementsByClassName("icon-cover");
  var event = document.createEvent("MouseEvents");
  event.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  for (let i = 0; i < btn.length; i = i + 2) {
    console.log("add icon");
    btn[i].children[0].dispatchEvent(event);
  }
  addProgress.innerText = "添加完成";
}

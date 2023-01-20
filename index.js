// ==UserScript==
// @name         Bilibili kill p2p
// @namespace    https://github.com/wyq977/bilibili-kill-p2p
// @version      0.1
// @description  干掉B站直播P2P传输
// @author       xfgryujk
// @license      none
// @include      /https?:\/\/live\.bilibili\.com\/?\??.*/
// @include      /https?:\/\/live\.bilibili\.com\/\d+\??.*/
// @include      /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @icon         https://www.bilibili.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/wyq977/bilibili-quick-collect/index.js
// @downloadURL  https://raw.githubusercontent.com/wyq977/bilibili-quick-collect/index.js
// @grant        none
// @icon         https://www.bilibili.com/favicon.ico
// ==/UserScript==

(function() {
  delete window.RTCPeerConnection
  delete window.mozRTCPeerConnection
  delete window.webkitRTCPeerConnection
  delete window.RTCDataChannel
  delete window.DataChannel
})();

// ==UserScript==
// @name         Bilibili Kill P2P
// @namespace    https://github.com/wyq977/tm-userscripts
// @version      0.1
// @description  干掉B站直播P2P传输
// @author       wyq977
// @license      GPL-3.0
// @match        /https?:\/\/live\.bilibili\.com\/?\??.*/
// @match        /https?:\/\/live\.bilibili\.com\/\d+\??.*/
// @match        /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @icon         https://www.bilibili.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/wyq977/tm-userscripts/bilibili-kill-p2p.js
// @downloadURL  https://raw.githubusercontent.com/wyq977/tm-userscripts/bilibili-kill-p2p.js
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

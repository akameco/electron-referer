'use strict';
const electron = require('electron');

function create(win, referer) {
	win.webContents.session.webRequest.onBeforeSendHeaders((detail, cb) => {
		let {requestHeaders} = detail;
		requestHeaders = Object.assign(requestHeaders, {Referer: referer});
		cb({requestHeaders});
	}, {
		urls: ['<all_urls>'],
		types: ['xmlhttprequest']
	});
}

module.exports = (referer, win) => {
	if (win) {
		create(win, referer);
		return;
	}

	(electron.BrowserWindow || electron.remote.BrowserWindow).getAllWindows().forEach(win => {
		create(win, referer);
	});

	(electron.app || electron.remote.app).on('browser-window-created', (e, win) => {
		create(win, referer);
	});
};

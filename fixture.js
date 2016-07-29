'use strict';
const electron = require('electron');

const referer = 'http://www.pixiv.net/';
require('.')(referer);

electron.app.on('ready', () => {
	(new electron.BrowserWindow({width: 400, height: 400}))
		.loadURL(`file://${__dirname}/fixture.html`);
});

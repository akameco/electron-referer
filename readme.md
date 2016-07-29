# electron-referer [![Build Status](https://travis-ci.org/akameco/electron-referer.svg?branch=master)](https://travis-ci.org/akameco/electron-referer)

> Referer control for Electron app.


## Install

```
$ npm install --save electron-referer
```


## Usage

```js
const {app, BrowserWindow} = require('electron');

require('electron-referer')('http://www.pixiv.net/');

let win;

app.on('ready', () => {
  win = new BrowserWindow();
});

```


## API

### referer(target, [win])

#### target

Type: `string`

Target Url for referer control.

#### win

Type `BrowserWindow`

When not specified, referer control will be added to all existing and new windows.

## License

MIT © [akameco](http://akameco.github.io)

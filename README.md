# Kintone Utility for JavaScript
[![npm version](https://badge.fury.io/js/%40shuuji3%2Fkintone-utility.svg)](https://badge.fury.io/js/%40shuuji3%2Fkintone-utility)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Utility library for development on the Kintone platform.

## Note

This library has been deprecated by the original authors and the successor is [@kintone/kintone-js-sdk](https://www.npmjs.com/package/@kintone/kintone-js-sdk). 

This fork is made for the legacy project which depends on Kintone Utility. Because new features such as Cursor API are appended to Kintone platform which break some functions of this Kintone Utility. 

## Usage

### npm library
This library is published as npm library at [npmjs.com](https://npmjs.com) for using from your bundle systems such as Webpack.

1. Add `kintone-utility` into your package dependencies.
```console
> yarn add @shuuji3/kintone-utility
```
2. Use `kintone-utility` from your project like following.
```js
// main.js
import kintoneUtility from 'kintone-utility';

const { records } = await kintoneUtility.rest.getAllRecordsByQuery({
  id: 1234,
  query: 'count >= 1000',
  fields: ['name', 'quality', 'count'],
});
console.log(records);
```

### CDN
As the library is published as npm library, you can use [unpkg](https://unpkg.com) CDN service to fetch this library. unpkg is mainly backed by [Cloudflare](https://www.cloudflare.com/) and [Google Cloud](https://cloud.google.com/). 🙏✨

#### Latest version
<https://unpkg.com/@shuuji3/kintone-utility/docs/kintoneUtility.min.js>

#### Original version (v0.4.1) by Cybozu
<https://unpkg.com/@shuuji3/kintone-utility@0.4.1/docs/kintoneUtility.min.js>

### Download File
1. Download `kintoneUtility.min.js` from [Releases](https://github.com/shuuji3/kintone-utility/releases) 
   or copy the following URL: <https://shuuji3.github.io/kintone-utility/kintoneUtility.min.js>
2. Upload the file to Kintone by following directions here: [Setting JavaScript Customization on Kintone](https://developer.kintone.io/hc/en-us/articles/213149757)
   or add the copied URL.
3. You can use the `kintoneUtility` object on your code!

## Documentation
[kintoneUtility.rest](./guides/rest_doc.md)

Additionally, I'd like to recommend to read API Docs on [Kintone Developer Program](https://developer.kintone.io/hc/en-us).

## Requirements for development
* Node.js (6.11.3+)

## Development
```console
$ yarn install
$ yarn start
```

`kintoneUtility.min.js` will be created in `docs/`.

## Original Copyright
Copyright(c) Cybozu, Inc.

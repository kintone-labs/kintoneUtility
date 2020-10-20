# kintone Utility for JavaScript (Deprecated)

## :warning::warning: This library has been deprecated.Please use [@kintone/rest-api-client](https://github.com/kintone/js-sdk/tree/master/packages/rest-api-client) instead. :warning::warning: 

This is a library in order to simplify the kintone customization.

## Version
0.4.1

## Usage
1. Download kintoneUtility.min.js and kintoneUtility.min.css (Future) from [releases](https://github.com/kintone/kintoneUtility/releases).
2. Upload them to kintone following help site. ([Setting JavaScript Customization on kintone](https://help.kintone.com/en/k/user/js_customize.html))
   Or add the copied URL.
3. You can use kintoneUtility Object on your code!

## Document
* [kintoneUtility.rest](./guides/rest_doc.md)
* kintoneUtility.ui (Future)

## Requirement
* Node.js (Version 6.11.3 or later)
* Git

## How to build
```shell-session
$ git clone https://github.com/kintone/kintoneUtility.git
$ cd kintoneUtility
$ npm install
$ npm run build
$ npm run watch (Automatically build when the sources are changed)
```

## Output
* ./docs/kintoneUtility.min.js
* ./docs/kintoneUtility.min.css (Future)

## License
MIT

## Copyright
Copyright(c) Cybozu, Inc.

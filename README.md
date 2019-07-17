# Kintone Utility for JavaScript
Utility library for development on Kintone platform.

## Usage
1. Download `kintoneUtility.min.js` from [Releases](https://github.com/kintone/kintoneUtility/releases) 
   or copy the following URL: <https://kintone.github.io/kintoneUtility/kintoneUtility.min.js>
2. Upload the file to Kintone by following directions here: [Setting JavaScript Customization on Kintone](https://help.kintone.com/en/k/user/js_customize.html)
   or add the copied URL.
3. You can use the `kintoneUtility` object on your code!

## Documentation
* [kintoneUtility.rest](./guides/rest_doc.md)

## Requirements
* Node.js (6.11.3+)

## Development
```console
$ yarn install
$ npm start
```

This outputs `kintoneUtility.min.js` in `docs/`.

## License
MIT

## Original Copyright
Copyright(c) Cybozu, Inc.

## Note

This library has been deprecated by the original authors and the successor is [@kintone/kintone-js-sdk](https://www.npmjs.com/package/@kintone/kintone-js-sdk). 

This fork is made for the legacy project which depends on Kintone Utility by appending new features of Kintone platform to break backward compatibilities such as Cursor API.

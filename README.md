# Unicode Encode 👋 v1.1

[![npm badge][2]][1]

In most browsers, calling `btoa()` on a Unicode string or Emojis will cause an `InvalidCharacterError` or `DOMException` exception.

This small package provides a simple solution by making available `utoa` and `atou`, **U**nicode to and from base64 encoding.

## Install

```shell
npm i --save unicode-encode
```

## Usage

In Node or in the browser.

```js
// Import the needed functions.
const { utoa, atou } = require('unicode-encode');

// Examples:
utoa('à bientôt ☮'); // w6AgYmllbnTDtHQg4piu
atou('w6AgYmllbnTDtHQg4piu'); // "à bientôt ☮"

utoa('👋 Unicode!'); // 8J+RiyBVbmljb2RlIQ==
atou('8J+RiyBVbmljb2RlIQ=='); // "👋 Unicode!"
```

[1]: https://npmjs.org/package/unicode-encode
[2]: https://nodei.co/npm/unicode-encode.png?compact=true

# codecopy

<p align="center">
  <img src="https://raw.githubusercontent.com/Kikobeats/react-codecopy/master/demo.gif" alt="codecopy">
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/codecopy.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/codecopy/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/codecopy)
[![Dependency status](https://img.shields.io/david/Kikobeats/codecopy.svg?style=flat-square)](https://david-dm.org/Kikobeats/codecopy)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/codecopy.svg?style=flat-square)](https://david-dm.org/Kikobeats/codecopy#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/codecopy.svg?style=flat-square)](https://www.npmjs.org/package/codecopy)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> "Copy to clipboard" button for your code snippets. Inspired in [codecopy](https://github.com/zenorocha/codecopy).

## Install

### from NPM

```bash
$ npm install codecopy --save
```

### from CDN

```html
<!-- CodeCopy Vanilla/UMD bundle -->
<link rel="stylesheet" src="//cdn.jsdelivr.net/npm/codecopy.js/umd/codecopy.min.css"></link>
<script src="//cdn.jsdelivr.net/npm/codecopy.js/umd/codecopy.min.js"></script>
```

Also available `amd` and `cjs` version.

## Usage

```js
document.addEventListener('DOMContentLoaded', function (event) {
  codecopy('pre') // your code tag selector!
})
```

## Related

- [react-codecopy](https://github.com/Kikobeats/react-codecopy) – A React component for "Copy to clipboard" button for your code snippets.

## License

**codecopy** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/codecopy/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/codecopy/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)

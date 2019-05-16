# remark-preset-wooorm

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

My personal markdown (and prose) style.

[Learn more about presets in unified’s docs][docs].

## Installation

[npm][npm-install]:

```sh
npm install remark-cli remark-preset-wooorm --save
```

Now add the following to your `package.json`:

```js
  "scripts": {
    "build-md": "remark ."
    "test": "npm run build-md && ..."
  },
  "remarkConfig": {
    "plugins": [
      "preset-wooorm"
    ]
  },
```

From now on, `npm test` also checks markdown.

```sh
npm test
```

## Checks

###### Markdown

*   Extends [`remark-preset-lint-recommended`][lint-recommended],
    and adds a strict code-style (see [`index.js`][index])
*   Checks [broken local links][validate-links]
*   Markdown is compiled with asterisk list-item bullets (`*`),
    and fenced code blocks (note: set `output: true` in your config to
    benefit from this)
*   How remark compiles can be configured inline with [comments][]
*   `Table of Contents` headers are kept up to date, with a depth of `3`
    (if `output: true`)
*   [GH references][github], like mentions or issue references, are
    linked (if `output: true`)

###### Natural Language

See [`retext-preset-wooorm`][retext-preset] for more info.

*   [English][] parsing
*   Two [spaces][] between sentences
*   Checks [“indefinite articles”][articles]: “a” or “an”
*   Checks [quotes and apostrophes][quotes] (`""` > `“”`)
*   Checks accidental [repeated words][repeated]
*   Checks [diacritics][]
*   Checks [redundant acronyms][ras]
*   Checks incorrectly placed apostrophes in [contractions][]

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/remark-preset-wooorm.svg

[build]: https://travis-ci.org/wooorm/remark-preset-wooorm

[downloads-badge]: https://img.shields.io/npm/dm/remark-preset-wooorm.svg

[downloads]: https://www.npmjs.com/package/remark-preset-wooorm

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-preset-wooorm.svg

[size]: https://bundlephobia.com/result?p=remark-preset-wooorm

[npm-install]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[index]: ./index.js

[lint-recommended]: https://github.com/wooorm/remark-lint/tree/master/packages/remark-preset-lint-recommended

[validate-links]: https://github.com/wooorm/remark-validate-links

[github]: https://github.com/wooorm/remark-github

[comments]: https://github.com/wooorm/remark-comment-config

[retext-preset]: https://github.com/wooorm/retext-preset-wooorm

[english]: https://github.com/wooorm/retext/tree/master/packages/retext-english

[spaces]: https://github.com/wooorm/retext-sentence-spacing

[articles]: https://github.com/wooorm/retext-indefinite-article

[quotes]: https://github.com/wooorm/retext-quotes

[repeated]: https://github.com/wooorm/retext-repeated-words

[contractions]: https://github.com/wooorm/retext-contractions

[diacritics]: https://github.com/wooorm/retext-diacritics

[ras]: https://github.com/wooorm/retext-redundant-acronyms

[docs]: https://github.com/unifiedjs/unified#preset

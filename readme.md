# remark-preset-wooorm

[![Build][badge-build-image]][badge-build-url]
[![Downloads][badge-downloads-image]][badge-downloads-url]
[![Size][badge-size-image]][badge-size-url]

My personal markdown (and prose) style.

## Contents

* [What is this?](#what-is-this)
* [When should I use this?](#when-should-i-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`remarkPresetWooorm`](#remarkpresetwooorm)
* [Checks](#checks)
* [Compatibility](#compatibility)
* [Related](#related)
* [Contribute](#contribute)
* [License](#license)

## What is this?

This is a preset for [remark][github-remark] to check markdown.
It’s used on all the readmes I work on.

## When should I use this?

Feel free to use this.
But you can also create your own personal style preset.

## Install

This package is [ESM only][github-gist-esm].
In Node.js (version 16+),
install with [npm][npm-install]:

```sh
npm install remark-preset-wooorm
```

In Deno with [`esm.sh`][esm-sh]:

```js
import remarkPresetWooorm from 'https://esm.sh/remark-preset-wooorm@10'
```

In browsers with [`esm.sh`][esm-sh]:

```html
<script type="module">
  import remarkPresetWooorm from 'https://esm.sh/remark-preset-wooorm@10?bundle'
</script>
```

## Use

```js
import {remark} from 'remark'
import remarkPresetWooorm from 'remark-preset-wooorm'
import {reporter} from 'vfile-reporter'

const file = await remark()
  .use(remarkPresetWooorm)
  .process('This *and* _and_ that.')

console.error(reporter(file))
```

Yields:

```text
1:7-1:16  warning Unexpected repeated `and`, remove one occurrence                                     and             retext-repeated-words
1:12-1:17 warning Unexpected emphasis marker `_`, expected `*`                                         emphasis-marker remark-lint
1:23      warning Unexpected missing final newline character, expected line feed (`\n`) at end of file final-newline   remark-lint

⚠ 3 warnings
```

## API

This package exports no identifiers.
The default export is [`remarkPresetWooorm`][api-remark-preset-wooorm].
It exports no [TypeScript][] types.

### `remarkPresetWooorm`

Preset to support my personal markdown style ([`Preset`][unified-preset]).

## Checks

###### Markdown

* extends
  [`remark-preset-lint-recommended`][github-remark-preset-lint-recommended],
  and adds a strict code-style (see [`index.js`][file-lib-index])
* checks [broken local links][github-remark-validate-links]
* markdown is compiled with asterisks (`*`) for list-item bullets and
  emphasis, and fenced code blocks (note: set `output: true` in your config to
  benefit from this)
* how remark compiles can be configured inline with
  [comments][github-remark-comment-config]
* `Contents` headers are kept up to date, with a depth of `3` (if
  `output: true`)
* [GH references][github-remark-github],
  like mentions or issue references, are linked (if `output: true`)

###### Natural language

See [`retext-preset-wooorm`][github-retext-preset-wooorm] for more info.

* [English][github-retext-english] parsing
* two [spaces][github-retext-sentence-spacing] between sentences
  (but: prefer a line break instead!)
* checks [“indefinite articles”][github-retext-indefinite-article]:
  “a” or “an”
* checks [quotes and apostrophes][github-retext-quotes]
  (`""` > `“”`)
* checks accidental [repeated words][github-retext-repeated-words]
* checks [diacritics][github-retext-diacritics]
* checks [redundant acronyms][github-retext-redundant-acronyms]
* checks incorrectly placed apostrophes in
  [contractions][github-retext-contractions]

## Compatibility

This projects is compatible with maintained versions of Node.js.

When we cut a new major release,
we drop support for unmaintained versions of Node.
This means we try to keep the current release line,
`remark-preset-wooorm@10`,
compatible with Node.js 16.

## Related

* [`retext-preset-wooorm`][github-retext-preset-wooorm]
  — personal markdown style

## Contribute

Yes please!
See [How to Contribute to Open Source][open-source-guide-contribute].

## License

[MIT][file-license] © [Titus Wormer][wooorm]

<!-- Definitions -->

[api-remark-preset-wooorm]: #remarkpresetwooorm

[badge-build-image]: https://github.com/wooorm/remark-preset-wooorm/workflows/main/badge.svg

[badge-build-url]: https://github.com/wooorm/remark-preset-wooorm/actions

[badge-downloads-image]: https://img.shields.io/npm/dm/remark-preset-wooorm.svg

[badge-downloads-url]: https://www.npmjs.com/package/remark-preset-wooorm

[badge-size-image]: https://img.shields.io/bundlejs/size/remark-preset-wooorm

[badge-size-url]: https://bundlejs.com/?q=remark-preset-wooorm

[esm-sh]: https://esm.sh

[file-lib-index]: lib/index.js

[file-license]: license

[github-gist-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[github-remark]: https://github.com/remarkjs/remark

[github-remark-comment-config]: https://github.com/remarkjs/remark-comment-config

[github-remark-github]: https://github.com/remarkjs/remark-github

[github-remark-preset-lint-recommended]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-preset-lint-recommended

[github-remark-validate-links]: https://github.com/remarkjs/remark-validate-links

[github-retext-contractions]: https://github.com/retextjs/retext-contractions

[github-retext-diacritics]: https://github.com/retextjs/retext-diacritics

[github-retext-english]: https://github.com/retextjs/retext/tree/main/packages/retext-english

[github-retext-indefinite-article]: https://github.com/retextjs/retext-indefinite-article

[github-retext-preset-wooorm]: https://github.com/wooorm/retext-preset-wooorm

[github-retext-quotes]: https://github.com/retextjs/retext-quotes

[github-retext-redundant-acronyms]: https://github.com/retextjs/retext-redundant-acronyms

[github-retext-repeated-words]: https://github.com/retextjs/retext-repeated-words

[github-retext-sentence-spacing]: https://github.com/retextjs/retext-sentence-spacing

[npm-install]: https://docs.npmjs.com/cli/install

[open-source-guide-contribute]: https://opensource.guide/how-to-contribute/

[typescript]: https://www.typescriptlang.org

[unified-preset]: https://github.com/unifiedjs/unified#preset

[wooorm]: https://wooorm.com

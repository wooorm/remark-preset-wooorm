# remark-preset-wooorm

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

My personal markdown (and prose) style.

## Contents

* [What is this?](#what-is-this)
* [When should I use this?](#when-should-i-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`remarkPresetWooorm`](#remarkpresetwooorm)
* [Checks](#checks)
* [Types](#types)
* [Compatibility](#compatibility)
* [Related](#related)
* [Contribute](#contribute)
* [License](#license)

## What is this?

This is a preset for [remark][] to check markdown.
It’s used on all the readmes I work on.

## When should I use this?

Feel free to use this.
But you can also create your own personal style preset.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install remark-preset-wooorm
```

In Deno with [`esm.sh`][esmsh]:

```js
import remarkPresetWooorm from 'https://esm.sh/remark-preset-wooorm@9'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import remarkPresetWooorm from 'https://esm.sh/remark-preset-wooorm@9?bundle'
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

```txt
1:7-1:16  warning Unexpected repeated `and`, remove one occurrence                                     and             retext-repeated-words
1:12-1:17 warning Unexpected emphasis marker `_`, expected `*`                                         emphasis-marker remark-lint
1:23      warning Unexpected missing final newline character, expected line feed (`\n`) at end of file final-newline   remark-lint

⚠ 3 warnings
```

## API

This package exports no identifiers.
The default export is `remarkPresetWooorm`.

### `remarkPresetWooorm`

Preset to support my personal markdown style.

## Checks

###### Markdown

* extends [`remark-preset-lint-recommended`][lint-recommended],
  and adds a strict code-style (see [`index.js`][index])
* checks [broken local links][validate-links]
* markdown is compiled with asterisks (`*`) for list-item bullets and
  emphasis, and fenced code blocks (note: set `output: true` in your config to
  benefit from this)
* how remark compiles can be configured inline with [comments][]
* `Contents` headers are kept up to date, with a depth of `3` (if
  `output: true`)
* [GH references][github], like mentions or issue references, are linked (if
  `output: true`)

###### Natural language

See [`retext-preset-wooorm`][retext-preset] for more info.

* [English][] parsing
* two [spaces][] between sentences (but: prefer a line break instead!)
* checks [“indefinite articles”][articles]: “a” or “an”
* checks [quotes and apostrophes][quotes] (`""` > `“”`)
* checks accidental [repeated words][repeated]
* checks [diacritics][]
* checks [redundant acronyms][ras]
* checks incorrectly placed apostrophes in [contractions][]

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

* [`retext-preset-wooorm`](https://github.com/wooorm/retext-preset-wooorm)
  — personal markdown style

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/remark-preset-wooorm/workflows/main/badge.svg

[build]: https://github.com/wooorm/remark-preset-wooorm/actions

[downloads-badge]: https://img.shields.io/npm/dm/remark-preset-wooorm.svg

[downloads]: https://www.npmjs.com/package/remark-preset-wooorm

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-preset-wooorm.svg

[size]: https://bundlephobia.com/result?p=remark-preset-wooorm

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[index]: lib/index.js

[lint-recommended]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-preset-lint-recommended

[validate-links]: https://github.com/remarkjs/remark-validate-links

[github]: https://github.com/remarkjs/remark-github

[comments]: https://github.com/remarkjs/remark-comment-config

[retext-preset]: https://github.com/wooorm/retext-preset-wooorm

[english]: https://github.com/retextjs/retext/tree/main/packages/retext-english

[spaces]: https://github.com/retextjs/retext-sentence-spacing

[articles]: https://github.com/retextjs/retext-indefinite-article

[quotes]: https://github.com/retextjs/retext-quotes

[repeated]: https://github.com/retextjs/retext-repeated-words

[contractions]: https://github.com/retextjs/retext-contractions

[diacritics]: https://github.com/retextjs/retext-diacritics

[ras]: https://github.com/retextjs/retext-redundant-acronyms

[remark]: https://github.com/remarkjs/remark

/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module remark-preset-wooorm
 * @fileoverview Personal prose style.
 */

'use strict';

/* Dependencies. */
var unified = require('unified');
var remark2retext = require('remark-retext');
var english = require('retext-english');
var quotes = require('retext-quotes');
var sentenceSpacing = require('retext-sentence-spacing');
var repeated = require('retext-repeated-words');
var indefinite = require('retext-indefinite-article');
var contractions = require('retext-contractions');

/* Expose. */
module.exports = attacher;

function attacher(processor) {
  processor.use(remark2retext, unified()
    .use(english)
    .use(sentenceSpacing, {preferred: 2})
    .use(quotes, {preferred: 'smart'})
    .use(repeated)
    .use(indefinite)
    .use(contractions)
  );
}

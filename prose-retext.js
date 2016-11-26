'use strict';

var unified = require('unified');
var remark2retext = require('remark-retext');
var english = require('retext-english');
var quotes = require('retext-quotes');
var sentenceSpacing = require('retext-sentence-spacing');
var repeated = require('retext-repeated-words');
var indefinite = require('retext-indefinite-article');
var contractions = require('retext-contractions');

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

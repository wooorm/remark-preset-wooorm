/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module remark-preset-wooorm
 * @fileoverview Personal prose style.
 */

'use strict';

/* Expose. */
module.exports = {
  presets: ['lint-recommended'],
  settings: {
    bullet: '*',
    fences: true
  },
  plugins: {
    './prose-retext.js': null,
    'comment-config': null,
    'validate-links': null,
    'lint': {
      blockquoteIndentation: 2,
      checkboxCharacterStyle: {checked: 'x', unchecked: ' '},
      checkboxContentIndent: true,
      codeBlockStyle: 'fenced',
      definitionCase: true,
      definitionSpacing: true,
      emphasisMarker: '_',
      fencedCodeFlag: true,
      fencedCodeMarker: '`',
      fileExtension: 'md',
      finalDefinition: true,
      firstHeadingLevel: true,
      headingStyle: 'atx',
      linkTitleStyle: '"',
      maximumHeadingLength: 60,
      maximumLineLength: 80,
      noConsecutiveBlankLines: true,
      noDuplicateDefinitions: true,
      noEmphasisAsHeading: true,
      noFileNameArticles: true,
      noFileNameConsecutiveDashes: true,
      noFileNameIrregularCharacters: true,
      noFileNameMixedCase: true,
      noFileNameOuterDashes: true,
      noHeadingContentIndent: true,
      noHeadingIndent: true,
      noHeadingPunctuation: true,
      noHtml: true,
      noMissingBlankLines: {exceptTightLists: true},
      noMultipleToplevelHeadings: true,
      noShellDollars: true,
      noTableIndentation: true,
      noTabs: true,
      orderedListMarkerValue: 'ordered',
      ruleStyle: '* * *',
      strongMarker: '*',
      tableCellPadding: 'padded',
      tablePipeAlignment: true,
      tablePipes: true,
      unorderedListMarkerStyle: '*'
    },
    'toc': {
      maxDepth: 3,
      tight: true
    },
    'github': null
  }
};

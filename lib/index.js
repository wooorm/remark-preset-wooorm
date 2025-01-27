/**
 * @import {} from 'remark-stringify'
 * @import {Preset} from 'unified'
 */

import remarkCommentConfig from 'remark-comment-config'
import remarkGfm from 'remark-gfm'
import remarkGithub from 'remark-github'
import remarkLintBlockquoteIndentation from 'remark-lint-blockquote-indentation'
import remarkLintCheckboxCharacterStyle from 'remark-lint-checkbox-character-style'
import remarkLintCheckboxContentIndent from 'remark-lint-checkbox-content-indent'
import remarkLintCodeBlockStyle from 'remark-lint-code-block-style'
import remarkLintCorrectMediaSyntax from 'remark-lint-correct-media-syntax'
import remarkLintDefinitionCase from 'remark-lint-definition-case'
import remarkLintDefinitionSort from 'remark-lint-definition-sort'
import remarkLintDefinitionSpacing from 'remark-lint-definition-spacing'
import remarkLintEmphasisMarker from 'remark-lint-emphasis-marker'
import remarkLintFencedCodeFlag, {
  checkGithubLinguistFlag
} from 'remark-lint-fenced-code-flag'
import remarkLintFencedCodeMarker from 'remark-lint-fenced-code-marker'
import remarkLintFileExtension from 'remark-lint-file-extension'
import remarkLintFinalDefinition from 'remark-lint-final-definition'
import remarkLintFirstHeadingLevel from 'remark-lint-first-heading-level'
import remarkLintHardBreakSpaces from 'remark-lint-hard-break-spaces'
import remarkLintHeadingStyle from 'remark-lint-heading-style'
import remarkLintLinkTitleStyle from 'remark-lint-link-title-style'
import remarkLintMaximumHeadingLength from 'remark-lint-maximum-heading-length'
import remarkLintMaximumLineLength from 'remark-lint-maximum-line-length'
import remarkLintMdxJsxAttributeSort from 'remark-lint-mdx-jsx-attribute-sort'
import remarkLintMdxJsxNoVoidChildren from 'remark-lint-mdx-jsx-no-void-children'
import remarkLintMdxJsxQuoteStyle from 'remark-lint-mdx-jsx-quote-style'
import remarkLintMdxJsxSelfClose from 'remark-lint-mdx-jsx-self-close'
import remarkLintMdxJsxShorthandAttribute from 'remark-lint-mdx-jsx-shorthand-attribute'
import remarkLintMdxJsxUniqueAttributeName from 'remark-lint-mdx-jsx-unique-attribute-name'
import remarkLintMediaStyle from 'remark-lint-media-style'
import remarkLintNoConsecutiveBlankLines from 'remark-lint-no-consecutive-blank-lines'
import remarkLintNoDuplicateDefinedUrls from 'remark-lint-no-duplicate-defined-urls'
import remarkLintNoDuplicateDefinitions from 'remark-lint-no-duplicate-definitions'
import remarkLintNoDuplicateHeadingsInSection from 'remark-lint-no-duplicate-headings-in-section'
import remarkLintNoEmphasisAsHeading from 'remark-lint-no-emphasis-as-heading'
import remarkLintNoEmptyUrl from 'remark-lint-no-empty-url'
import remarkLintNoFileNameArticles from 'remark-lint-no-file-name-articles'
import remarkLintNoFileNameConsecutiveDashes from 'remark-lint-no-file-name-consecutive-dashes'
import remarkLintNoFileNameIrregularCharacters from 'remark-lint-no-file-name-irregular-characters'
import remarkLintNoFileNameMixedCase from 'remark-lint-no-file-name-mixed-case'
import remarkLintNoFileNameOuterDashes from 'remark-lint-no-file-name-outer-dashes'
import remarkLintNoHeadingContentIndent from 'remark-lint-no-heading-content-indent'
import remarkLintNoHeadingIndent from 'remark-lint-no-heading-indent'
import remarkLintNoHeadingLikeParagraph from 'remark-lint-no-heading-like-paragraph'
import remarkLintNoHiddenTableCell from 'remark-lint-no-hidden-table-cell'
import remarkLintNoHtml from 'remark-lint-no-html'
import remarkLintNoMissingBlankLines from 'remark-lint-no-missing-blank-lines'
import remarkLintNoMultipleToplevelHeadings from 'remark-lint-no-multiple-toplevel-headings'
import remarkLintNoParagraphContentIndent from 'remark-lint-no-paragraph-content-indent'
import remarkLintNoReferenceLikeUrl from 'remark-lint-no-reference-like-url'
import remarkLintNoShellDollars from 'remark-lint-no-shell-dollars'
import remarkLintNoTableIndentation from 'remark-lint-no-table-indentation'
import remarkLintNoTabs from 'remark-lint-no-tabs'
import remarkLintNoUnneededFullReferenceImage from 'remark-lint-no-unneeded-full-reference-image'
import remarkLintNoUnneededFullReferenceLink from 'remark-lint-no-unneeded-full-reference-link'
import remarkLintOrderedListMarkerValue from 'remark-lint-ordered-list-marker-value'
import remarkLintRuleStyle from 'remark-lint-rule-style'
import remarkLintStrongMarker from 'remark-lint-strong-marker'
import remarkLintTableCellPadding from 'remark-lint-table-cell-padding'
import remarkLintTablePipeAlignment from 'remark-lint-table-pipe-alignment'
import remarkLintTablePipes from 'remark-lint-table-pipes'
import remarkLintUnorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import remarkRetext from 'remark-retext'
import remarkToc from 'remark-toc'
import remarkValidateLinks from 'remark-validate-links'
import retextEnglish from 'retext-english'
import retextPresetWooorm from 'retext-preset-wooorm'
import stringWidth from 'string-width'
import {unified} from 'unified'

/** @type {Preset} */
const remarkPresetWooorm = {
  settings: {
    // To do: next major: remove (it is the default now).
    bullet: '*',
    // To do: next major: remove (it is the default now).
    emphasis: '*',
    // To do: next major: remove (it is the default now).
    fences: true,
    // To do: next major: remove (it is the default now).
    ruleSpaces: false
  },
  plugins: [
    [remarkRetext, unified().use(retextEnglish).use(retextPresetWooorm)],
    remarkPresetLintRecommended,
    remarkCommentConfig,
    remarkValidateLinks,
    [remarkLintBlockquoteIndentation, 2],
    [remarkLintCheckboxCharacterStyle, {checked: 'x', unchecked: ' '}],
    remarkLintCheckboxContentIndent,
    [remarkLintCodeBlockStyle, 'fenced'],
    remarkLintCorrectMediaSyntax,
    remarkLintDefinitionCase,
    remarkLintDefinitionSort,
    remarkLintDefinitionSpacing,
    [remarkLintEmphasisMarker, '*'],
    [remarkLintFencedCodeFlag, checkGithubLinguistFlag],
    [remarkLintFencedCodeMarker, '`'],
    [remarkLintFileExtension, ['md', 'mdx']],
    remarkLintFinalDefinition,
    remarkLintFirstHeadingLevel,
    [remarkLintHardBreakSpaces, {allowSpaces: false}],
    [remarkLintHeadingStyle, 'atx'],
    [remarkLintLinkTitleStyle, '"'],
    [remarkLintMaximumHeadingLength, {size: 60, stringLength: stringWidth}],
    [remarkLintMaximumLineLength, {size: 80, stringLength: stringWidth}],
    remarkLintMdxJsxAttributeSort,
    remarkLintMdxJsxNoVoidChildren,
    [remarkLintMdxJsxQuoteStyle, '"'],
    remarkLintMdxJsxSelfClose,
    remarkLintMdxJsxShorthandAttribute,
    remarkLintMdxJsxUniqueAttributeName,
    [remarkLintMediaStyle, 'reference-reuse'],
    remarkLintNoConsecutiveBlankLines,
    remarkLintNoDuplicateDefinedUrls,
    remarkLintNoDuplicateDefinitions,
    remarkLintNoDuplicateHeadingsInSection,
    remarkLintNoEmphasisAsHeading,
    remarkLintNoEmptyUrl,
    remarkLintNoFileNameArticles,
    remarkLintNoFileNameConsecutiveDashes,
    remarkLintNoFileNameIrregularCharacters,
    remarkLintNoFileNameMixedCase,
    remarkLintNoFileNameOuterDashes,
    remarkLintNoHeadingContentIndent,
    remarkLintNoHeadingIndent,
    remarkLintNoHeadingLikeParagraph,
    remarkLintNoHiddenTableCell,
    remarkLintNoHtml,
    [remarkLintNoMissingBlankLines, {exceptTightLists: true}],
    remarkLintNoMultipleToplevelHeadings,
    remarkLintNoParagraphContentIndent,
    remarkLintNoReferenceLikeUrl,
    remarkLintNoShellDollars,
    remarkLintNoTableIndentation,
    remarkLintNoTabs,
    remarkLintNoUnneededFullReferenceImage,
    remarkLintNoUnneededFullReferenceLink,
    [remarkLintOrderedListMarkerValue, 'ordered'],
    [remarkLintRuleStyle, '***'],
    [remarkLintStrongMarker, '*'],
    [remarkLintTableCellPadding, {stringLength: stringWidth, style: 'padded'}],
    [remarkLintTablePipeAlignment, {stringLength: stringWidth}],
    remarkLintTablePipes,
    [remarkLintUnorderedListMarkerStyle, '*'],
    [
      remarkToc,
      {
        heading: 'contents|table[ -]of[ -]contents?|toc',
        maxDepth: 3,
        tight: true
      }
    ],
    remarkGfm,
    remarkGithub
  ]
}

export default remarkPresetWooorm

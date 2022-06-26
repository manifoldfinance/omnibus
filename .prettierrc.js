/**
 * @file Prettier configuration for Conformance
 * @version 1.0.6
 * @summary base config adapted from AirBNB to maximize performance
 * @schema http://json.schemastore.org/prettierrc
 */

'use strict';

module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: 'preserve',
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 100,
        tabWidth: 2,
        arrowParens: 'always',
        bracketSpacing: true,
        endOfLine: 'lf',
        proseWrap: 'preserve',
        quoteProps: 'consistent',
        semi: true,
        singleQuote: false,
        trailingComma: 'all',
        useTabs: false,
        embeddedLanguageFormatting: 'auto',
      },
    },
  ],
}; 


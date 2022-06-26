
// @ts-check

/** 
 *  @type {import('./types').prettier}
 */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  proseWrap: 'never',
  semi: true,
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 80,
        tabWidth: 2,
        arrowParens: 'always',
        bracketSpacing: true,
        endOfLine: 'lf',
        proseWrap: 'always',
        quoteProps: 'consistent',
        semi: true,
        singleQuote: false,
        trailingComma: 'all',
        useTabs: true,
        embeddedLanguageFormatting: 'auto',
      },
    },
  ],
};
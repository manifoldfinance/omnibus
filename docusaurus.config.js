// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manifold Finance',
  tagline: 'Manifold Finance Engineering Documentation',
  url: 'https://engineering.manifoldfinance.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'manifoldfinance', // Usually your GitHub org/user name.
  projectName: 'omnibus', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/manifoldfinance/omnibus/edit/master/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
        
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      announcementBar: {
        id: 'support_us',
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        hideOnScroll: true,
        title: '🌀 Manifold',
        items: [
          {
            label: 'Guidebook',
            position: 'left',
            items: [
              {
                label: 'Yield Farming and Strategies',
                href: '#',
              },
              {
                label: 'Limit order protocol',
                href: '#',
              },
              {
                label: 'MasterChef v2',
                href: '#',
              },
            ],
          },
          {
            label: 'Protocols',
            position: 'left',
            items: [
              {
                label: 'Sushiswap',
                href: '#',
              },
              {
                label: 'MasterChef',
                href: '#',
              },
              {
                label: 'Trident',
                href: '#',
              },
              {
                label: 'BentoVault',
                href: '#',
              },
              {
                label: 'Miso Launchpad',
                href: '#',
              },
            ],
          },
          {
            label: 'Incentive Programs',
            position: 'right',
            href: '#',
          },
          {
            label: 'Deploy Strategy',
            position: 'right',
            href: '#',
          },
          {
            href: 'https://www.npmjs.com/search?q=%40sushiswap',
            label: '@disco3/react',
            position: 'right',
          },
          {
            href: 'https://github.com/manifoldfinance',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        apiKey: 'b6b058ad8567fd68f16ec803fefef589',
        indexName: 'sushiswap',
        contextualSearch: true,
        appId: 'XOPRM3IJU6',
        searchParameters: {},
        facetFilters: [],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;

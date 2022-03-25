// @ts-check

//const math = require('remark-math');
//const katex = require('rehype-katex');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// /** @type {import('@docusaurus/types').DocusaurusConfig} */
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manifold Finance',
  tagline: 'Manifold Finance Knowledgebase',
  url: 'https://docs.manifoldfinance.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'manifoldfinance', // Usually your GitHub org/user name.
  projectName: 'omnibus', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/manifoldfinance/omnibus/edit/master/',
     //     remarkPlugins: [math],
     //     rehypePlugins: [katex],
          routeBasePath: '/',
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
            href: '/index',
            position: 'left',
            items: [
              {
                label: 'Platform Overview',
                href: '/overview/platform',
              },
              {
                label: 'ETH2 Staking',
                href: '#',
              },
              {
                label: 'OpenMEV',
                href: '#',
              },
            ],
          },
          {
            label: 'Protocols',
            position: 'left',
            items: [
              {
                label: 'FOLD Staking',
                href: '#',
              },
              {
                label: 'FOLD Vaults',
                href: '#',
              },
              {
                label: 'FOLD Markets',
                href: '#',
              },
              {
                label: 'OpenMEV',
                href: '#',
              },
              {
                label: 'FOLD Governance',
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
        apiKey: '54131dd15a05faf7104740c9907da3fd',
        indexName: 'docs-manifold',
        contextualSearch: true,
        appId: 'CEKAQ7PWEX',
        searchParameters: {},
        facetFilters: [],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
 //       additionalLanguages: ['solidity']
      },
      hideableSidebar: true,
    },
};

module.exports = config;

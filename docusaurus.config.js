const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Manifold Finance',
  tagline: 'Omnibus Documentation',
  url: 'https://docs.maniofldifnance.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'manifoldfinance', // Usually your GitHub org/user name.
  projectName: 'omnibus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Manifold Finance',
      logo: {
        alt: 'Manifold Finance logo',
        src: 'img/manifold-icon-text-horizontal.svg',
        href: 'https://manifoldfinance.com',
        target: '_self'
      },
      items: [
        { to: 'https://manifoldfinance.com/explore', label: 'Rules', position: 'left', target: '_self' },
        { to: 'https://manifoldfinance.com/editor', label: 'Playground', position: 'left', target: '_self' },
        { to: 'https://manifoldfinance.com/manage', label: 'Dashboard', position: 'left', target: '_self' },
        { to: 'https://manifoldfinance.com/docs/', label: 'Docs', position: 'left', target: '_self' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/manifoldfinance/omnibus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Manifold Finance, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/manifoldfinance/omnibus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/manifoldfinance/omnibus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
        {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
    ],
  ],
};

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Evergood',
  tagline: '',
  url: 'https://evergoodteam.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'evergoodteam', // Usually your GitHub org/user name.
  projectName: 'evergoodteam.github.io', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@docusaurus/plugin-ideal-image'),
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-D6431CV5N3',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EvergoodTeam/evergoodteam.github.io/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EvergoodTeam/evergoodteam.github.io/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'minecraft, mod, modpack'}],

      announcementBar: {
        content:
          'The Wiki and the Documentation on our projects are still a WIP',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },

      navbar: {
        logo: {
          alt: 'Evergood',
          src: 'img/evergood-light.svg',
          srcDark: 'img/evergood-dark.svg',
          className: 'evergood-navbar-logo',
        },
        hideOnScroll: false,
        items: [
          {
            className: "header-label",
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            className: "header-label",
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            className: "header-curse-link",
            "aria-label": "",
            href: 'https://www.curseforge.com/members/evergoodteam/projects',
            position: 'right',
          },
          {
            className: "header-crowdin-link",
            "aria-label": "",
            href: 'https://crowdin.com/profile/EvergoodTeam',
            position: 'right',
          },
          {
            className: "header-discord-link",
            "aria-label": "",
            href: 'https://discord.gg/k2P68Y8',
            position: 'right',
          },
          {
            className: "header-github-link",
            "aria-label": "",
            href: 'https://github.com/EvergoodTeam/evergoodteam.github.io',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [/*
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/',
              },*/
              {
                label: 'Discord',
                href: 'https://discord.gg/k2P68Y8',
              },
              {
                label: 'Curseforge',
                href: 'https://bit.ly/evergoodproject',
              },
              {
                label: 'Crowdin',
                href: 'https://crowdin.com/profile/EvergoodTeam',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/evergoodteam',
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
                label: 'Support Us',
                to: 'docs/support',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['groovy', 'java'],
      },
    }),
};

module.exports = config;

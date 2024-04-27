
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EditPix',
  tagline: 'A simple JavaScript library for image editing.',
  favicon: 'img/favicon.ico',

  url: 'https://studio-yolo.github.io/',
  baseUrl: '/editpix-doc/',

  organizationName: 'Studio - YOLO',
  projectName: 'editpix-doc',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: ["./src/css/custom.css"]
        },
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/studio-YOLO/editpix-doc/tree/main/',
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'EditPix Logo',
          src: 'img/editpix-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/studio-YOLO/editpix',
            label: 'GitHub',
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
                label: 'Documentation',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/studio-YOLO/editpix-doc'
              },
              {
                label: 'EditPix',
                href: 'https://github.com/studio-YOLO/editpix',
              },
              {
                label: 'Studio - YOLO',
                href: 'https://github.com/studio-YOLO',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/editpix',
              },
              {
                label: 'jsDelivr',
                href: 'https://www.jsdelivr.com/package/npm/editpix',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Studio-YOLO`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

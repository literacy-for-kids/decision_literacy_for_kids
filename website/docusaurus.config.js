// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'node:module';
import {dirname, resolve} from 'node:path';

const require = createRequire(import.meta.url);
const navbarItems = require('literacy-site-theme/navbarItems');
const footerConfig = require('literacy-site-theme/footerConfig');

// Resolve the theme's source directory so we can tell webpack to transpile it.
// Docusaurus only auto-transpiles packages whose names contain "docusaurus".
const themeSrcDir = resolve(
  dirname(require.resolve('literacy-site-theme')),
  'theme',
);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Decision Literacy Curriculum for Kids',
  tagline: 'An 18-week curriculum that teaches kids to debug the human brain — probability, biases, strategy, and real-world problem solving',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://literacy-for-kids.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it should match your repo name
  baseUrl: '/decision_literacy_for_kids/',

  // GitHub pages deployment config.
  organizationName: 'literacy-for-kids',
  projectName: 'decision_literacy_for_kids',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['literacy-site-theme'],

  plugins: [
    function transpileLiteracyTheme() {
      return {
        name: 'transpile-literacy-theme',
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.[jt]sx?$/i,
                  include: [themeSrcDir],
                  type: 'javascript/auto',
                  use: [
                    {
                      loader: require.resolve('babel-loader'),
                      options: {
                        presets: [
                          require.resolve(
                            '@docusaurus/core/lib/babel/preset',
                          ),
                        ],
                        babelrc: false,
                        configFile: false,
                      },
                    },
                  ],
                },
              ],
            },
          };
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/literacy-for-kids/decision_literacy_for_kids/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/hero-image.png',
      navbar: {
        title: 'Decision Literacy for Kids',
        logo: {
          alt: 'Decision Literacy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'curriculumSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          ...navbarItems,
          {
            href: 'https://github.com/literacy-for-kids/decision_literacy_for_kids',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: footerConfig,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;

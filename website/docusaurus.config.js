// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const {hub, curricula} = require('literacy-site-theme/ecosystem');
const footerConfig = require('literacy-site-theme/footerConfig');

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
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['literacy-site-theme'],

  plugins: [
    function transpileLiteracyTheme() {
      const themePath = require.resolve('literacy-site-theme');
      const themeDir = require('path').dirname(themePath);
      return {
        name: 'transpile-literacy-theme',
        configureWebpack(config) {
          config.module.rules.push({
            test: /\.[jt]sx?$/i,
            include: [themeDir],
            type: 'javascript/auto',
            use: config.module.rules
              .find((rule) => String(rule.test) === '/\\.[jt]sx?$/i')
              ?.use ?? [],
          });
          return {};
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
          {
            type: 'dropdown',
            label: 'Literacy for Kids',
            position: 'left',
            items: [
              {label: 'Hub', href: hub.href},
              ...curricula.map((c) => ({
                label: c.label.replace(' Literacy', ''),
                href: c.href,
              })),
            ],
          },
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

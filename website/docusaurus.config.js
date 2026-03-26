// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {literacyHubUrl} from './src/data/literacyLinks.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Decision Literacy Curriculum for Kids',
  tagline: 'An 18-week curriculum that teaches kids to debug the human brain — probability, biases, strategy, and real-world problem solving',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zcohen-nerd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it should match your repo name
  baseUrl: '/decision_literacy_for_kids/',

  // GitHub pages deployment config.
  organizationName: 'zcohen-nerd',
  projectName: 'decision_literacy_for_kids',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/zcohen-nerd/decision_literacy_for_kids/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/zcohen-nerd/decision_literacy_for_kids/tree/main/website/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/zcohen-nerd/decision_literacy_for_kids',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Curriculum',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
              {
                label: 'Week 1',
                to: '/docs/week01-week-1',
              },
              {
                label: 'License',
                to: '/docs/license',
              },
            ],
          },
          {
            title: 'License',
            items: [
              {
                label: 'CC BY-NC-SA 4.0',
                href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
              },
              {
                label: 'License Summary',
                to: '/docs/license',
              },
              {
                label: 'Source Repository',
                href: 'https://github.com/zcohen-nerd/decision_literacy_for_kids',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/zcohen-nerd/decision_literacy_for_kids/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/zcohen-nerd/decision_literacy_for_kids/issues',
              },
            ],
          },
          {
            title: 'Literacy for Kids',
            items: [
              {
                label: 'Project Hub',
                href: literacyHubUrl,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zachary Cohen. Curriculum content is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>. See the <a href="/decision_literacy_for_kids/docs/license">license page</a> for attribution, sharing, and adaptation details.`,
      },
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

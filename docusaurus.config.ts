import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: "James's Wiki 📚",
  tagline: 'Knowledge bank for everything Carleton 🐦‍⬛, and more 🌎',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.jamesyap.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // env vars
  // https://docusaurus.io/docs/deployment#using-environment-variables
  customFields: {
    CONTENTFUL_SPACE_ID: '7m5nzpb6x3ap',
    CONTENTFUL_ACCESS_TOKEN: '5MxQQuq-Nt3HCxyXGRbERXBwkTzB2PXOo4HLyWOZhz4',
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'voidranjer', // Usually your GitHub org/user name.
  projectName: 'james-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/voidranjer/james-docs/tree/main',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/voidranjer/james-docs/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Math equation styles: https://docusaurus.io/docs/markdown-features/math-equations
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    // Replace with your project's social card
    image: 'img/james-social-card.png',
    navbar: {
      title: "James's Wiki 📚",
      // logo: {
      //   alt: "James's logo",
      //   src: 'img/james-social-card.png',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'projectSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'docSidebar',
          sidebarId: 'lectureSidebar',
          position: 'left',
          label: 'Lecture Notes',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/resources', label: 'Resources', position: 'left' },
        {
          href: 'https://jamesyap.org',
          label: 'About Me',
          position: 'right',
        },
        {
          href: 'https://github.com/voidranjer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About Me',
          items: [
            {
              label: 'jamesyap.org',
              to: 'https://jamesyap.org',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://youtube.com/@ravenjs',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/james_yap8/',
            },
            {
              label: 'LinkedIn',
              href: 'https://https://www.linkedin.com/in/james-yapsh/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Tutorials',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/voidranjer',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} https://jamesyap.org`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

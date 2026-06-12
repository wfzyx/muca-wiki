// @ts-check
// Docusaurus config for the Muca Brasil (MU Online) community wiki.
// This runs in Node.js — no browser APIs / JSX here.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// ──────────────────────────────────────────────────────────────────────────
// GitHub Pages deployment placeholders.
// Replace these two with your own GitHub account + repository name.
//   - If you deploy to https://<user>.github.io/<repo>/  -> keep baseUrl '/<repo>/'
//   - If you use a custom domain (CNAME)                 -> set baseUrl to '/'
// ──────────────────────────────────────────────────────────────────────────
const GITHUB_ORG = 'wfzyx'; // GitHub user or org
const GITHUB_REPO = 'muca-wiki'; // GitHub repository name

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Muca Wiki',
  tagline: 'Guia da comunidade — Mu Online Muca Brasil',
  favicon: 'img/muca-favicon.ico',

  future: {
    v4: true, // Forward-compat with Docusaurus v4
  },

  // Production URL. For project pages this is https://<org>.github.io
  url: `https://${GITHUB_ORG}.github.io`,
  // Served under /<repo>/ on GitHub Pages project sites.
  baseUrl: `/${GITHUB_REPO}/`,

  // GitHub Pages deployment config.
  organizationName: GITHUB_ORG,
  projectName: GITHUB_REPO,
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Start as 'warn' while content is incomplete; tighten to 'throw' before launch.
  onBrokenLinks: 'warn',

  // v4 location for the broken-markdown-links hook.
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Primary language is Brazilian Portuguese. Game item/skill names stay untranslated.
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/tree/main/`,
          // Enable `showLastUpdateTime: true` AFTER your first git commit
          // (it reads git history; it errors on a repo with no commits yet).
          // Register the game-specific callouts. `extendDefaults` keeps
          // note/tip/info/warning/danger working as usual.
          admonitions: {
            keywords: ['quest', 'patch'],
            extendDefaults: true,
          },
        },
        blog: {
          // Used as the "Patch Notes / Manutenção" feed — newer posts supersede older ones.
          path: 'blog',
          routeBasePath: 'patch-notes',
          blogTitle: 'Patch Notes & Manutenção',
          blogDescription: 'Mudanças de servidor, eventos e manutenções',
          showReadingTime: true,
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/tree/main/`,
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

  // Offline/local search — no external service needed (works on the built site).
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['pt', 'en'],
        indexBlog: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/patch-notes',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/muca-social-card.jpg',

      // Gaming wiki: default to dark. Switch stays available, but we ignore the OS pref.
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      // Multi-tiered top navigation: dropdowns grouping each game domain.
      navbar: {
        title: 'Muca Wiki',
        logo: {
          alt: 'Muca Brasil',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'dropdown',
            label: 'Personagens',
            position: 'left',
            items: [
              {type: 'doc', docId: 'classes-builds/index', label: 'Classes & Builds'},
              {type: 'doc', docId: 'mecanicas/index', label: 'Mecânicas de Jogo'},
              {type: 'doc', docId: 'mecanicas/sistemas-progressao', label: 'Reset & Desafio'},
              {type: 'doc', docId: 'mecanicas/comandos', label: 'Comandos do Cliente'},
            ],
          },
          {
            type: 'dropdown',
            label: 'Itens',
            position: 'left',
            items: [
              {type: 'doc', docId: 'itens-crafting/index', label: 'Visão Geral'},
              {type: 'doc', docId: 'itens-crafting/weapons', label: 'Armas (Weapons)'},
              {type: 'doc', docId: 'itens-crafting/armor', label: 'Armaduras (Armor)'},
              {type: 'doc', docId: 'itens-crafting/consumables', label: 'Consumíveis & Jewels'},
              {type: 'doc', docId: 'itens-crafting/chaos-machine', label: 'Chaos Machine'},
            ],
          },
          {
            type: 'dropdown',
            label: 'Mundo',
            position: 'left',
            items: [
              {type: 'doc', docId: 'mundo-dungeons/index', label: 'Visão Geral'},
              {type: 'doc', docId: 'mundo-dungeons/mapas', label: 'Mapas & Progressão'},
              {type: 'doc', docId: 'mundo-dungeons/eventos', label: 'Eventos & Dungeons'},
              {type: 'doc', docId: 'mundo-dungeons/raids', label: 'Raids & World Bosses'},
              {type: 'doc', docId: 'mundo-dungeons/quests', label: 'Quests'},
            ],
          },
          {
            type: 'dropdown',
            label: 'Servidor',
            position: 'left',
            items: [
              {type: 'doc', docId: 'servidor/equipe', label: 'Equipe'},
              {type: 'doc', docId: 'servidor/salas', label: 'Salas'},
              {type: 'doc', docId: 'servidor/regras', label: 'Regras do Servidor'},
              {type: 'doc', docId: 'servidor/links', label: 'Links Oficiais'},
              {type: 'doc', docId: 'servidor/historico', label: 'Histórico de Manutenções'},
              {type: 'doc', docId: 'servidor/contribuir', label: 'Como Contribuir'},
            ],
          },
          {to: '/patch-notes', label: 'Patch Notes', position: 'left'},
          {
            href: `https://forum.mucabrasil.com.br/forums/13-Tutoriais`,
            label: 'Fórum',
            position: 'right',
          },
          {
            href: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {label: 'Classes & Builds', to: '/docs/classes-builds'},
              {label: 'Itens & Crafting', to: '/docs/itens-crafting'},
              {label: 'Mapas & Dungeons', to: '/docs/mundo-dungeons'},
              {label: 'Mecânicas', to: '/docs/mecanicas'},
            ],
          },
          {
            title: 'Site Oficial',
            items: [
              {label: 'Página inicial', href: 'https://www.mucabrasil.com.br/'},
              {label: 'Hall da Fama', href: 'https://www.mucabrasil.com.br/?go=hallfama'},
              {label: 'Equipe', href: 'https://www.mucabrasil.com.br/?go=equipe'},
              {label: 'Shop', href: 'https://shop.mucabrasil.com.br/'},
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {label: 'Fórum Muca Brasil', href: 'https://forum.mucabrasil.com.br/'},
              {label: 'Tutoriais', href: 'https://forum.mucabrasil.com.br/forums/13-Tutoriais'},
              {label: 'Contato', href: 'https://www.mucabrasil.com.br/?go=contato'},
            ],
          },
          {
            title: 'Mais',
            items: [
              {label: 'Patch Notes', to: '/patch-notes'},
              {label: 'GitHub', href: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}`},
            ],
          },
        ],
        copyright: `Wiki da comunidade Muca Brasil. Conteúdo fan-made, não oficial. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.oneDark,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;

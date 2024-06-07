import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'PRISMO Api Docs',
    tagline: '',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

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
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    docRootComponent: "@theme/DocRoot",
                    docItemComponent: "@theme/ApiItem" // derived from docusaurus-theme-openapi-docs
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],

    plugins: [
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: "api", // plugin id
                docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
                config: {
                    prismo: { // the <id> referenced when running CLI commands
                        specPath: "openapi.json", // path to OpenAPI spec, URLs supported
                        outputDir: "docs/prismo", // output directory for generated files
                        sidebarOptions: { // optional, instructs plugin to generate sidebar.js
                            groupPathsBy: "tag", // group sidebar items by operation "tag"
                        },
                    }
                }
            },
        ]
    ],
    themes: ["docusaurus-theme-openapi-docs"], // export theme components

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'PRISMO',
            logo: {
                alt: 'Icon do PRISMO',
                src: 'img/prismo-icon.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'prismo',
                    position: 'left',
                    label: 'Api Docs',
                },
                {
                    href: 'https://github.com/thomasreichmann/GS---python',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;

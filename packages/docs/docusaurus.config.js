// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const title = "SetApp";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: "React, CLIs and more...",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://frankeo.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "set-app",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Frankeo", // Usually your GitHub org/user name.
  projectName: "set-app", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "main",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/setapp.png",
      navbar: {
        title: "SetApp",
        logo: {
          alt: "Set App Logo",
          src: "img/setapp.png",
        },
        items: [
          {
            type: "doc",
            docId: "basic-info",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/Frankeo/set-app",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/basic-info",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/setapp",
              },
              {
                label: "Discord",
                href: "https://discord.gg/tf9fuWSa",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Frankeo/set-app",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${title}, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

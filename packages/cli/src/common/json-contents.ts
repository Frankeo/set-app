import { ESLintRC } from "./types.js";

export const esLintRCBasic: ESLintRC = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2022,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": ["ts"],
    },
  },
};

export const esLintRCReact: ESLintRC = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-empty-function": 0,
  },
  plugins: ["react", "import", "jsx-a11y", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};

export const tsConfigBasic = {
  compilerOptions: {
    target: "ES2022",
    jsx: "react-jsx",
    module: "ES2022",
    moduleResolution: "node",
    esModuleInterop: true,
    forceConsistentCasingInFileNames: true,
    strict: true,
    skipLibCheck: true,
  },
};

export const devContainerConfig = {
  name: "Debian",
  image: "mcr.microsoft.com/devcontainers/base:bullseye",
  features: {
    "ghcr.io/devcontainers/features/common-utils:1": {
      installZsh: true,
      installOhMyZsh: true,
      upgradePackages: true,
    },
    "ghcr.io/devcontainers/features/node:1": {},
  },
  settings: {
    "terminal.integrated.defaultProfile.linux": "zsh",
    "terminal.integrated.profiles.linux": {
      zsh: {
        path: "/bin/zsh",
      },
    },
  },
  extensions: [
    "zixuanchen.vitest-explorer",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "christian-kohler.npm-intellisense",
    "tal7aouy.icons",
    "dsznajder.es7-react-js-snippets",
  ],
};

import { ESLintRC } from "./types.js";

export const esLintRC: ESLintRC = {
  extends: ["eslint:recommended", "prettier"],
  plugins: [],
  parserOptions: {
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
};

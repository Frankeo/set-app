export interface PackageJSON {
  scripts: ScriptCommands;
  dependencies: Dependencies;
  devDependencies: Dependencies;
}

export interface ScriptCommands {
  lint?: string;
  format?: string;
  "check-format"?: string;
  dev?: string;
  build?: string;
  preview?: string;
  typecheck?: string;
  test?: string;
  "test:watch"?: string;
  coverage?: string;
}

interface ESLintRules {
  [K: string]: number;
}

export interface Dependencies {
  [K: string]: string;
}

export interface ESLintRC {
  extends: string[];
  plugins: string[];
  parser: string;
  parserOptions: {
    ecmaVersion: number;
    project: string;
    sourceType: string;
    ecmaFeatures?: {
      jsx: boolean;
    };
  };
  rules?: ESLintRules;
  env: {
    es6: boolean;
    browser: boolean;
    node: boolean;
  };
  settings: {
    react?: {
      version: string;
    };
    "import/resolver": {
      typescript: {
        alwaysTryTypes: boolean;
      };
    };
    "import/parsers": {
      "@typescript-eslint/parser": string[];
    };
  };
}

export enum ExampleOptions {
  REACT = "REACT",
  CONSOLE = "CONSOLE",
  REDUX = "REACT-REDUX",
}

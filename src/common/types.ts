export interface PackageJSON {
  scripts: ScriptCommands;
}

export interface ScriptCommands {
  lint?: string;
  format?: string;
  dev?: string;
  build?: string;
  preview?: string;
}

interface ESLintRules {
  [K: string]: number;
}

export interface ESLintRC {
  extends: string[];
  plugins: string[];
  parserOptions: {
    ecmaVersion: number;
    sourceType: string;
    ecmaFeatures: {
      jsx: boolean;
    };
  };
  rules?: ESLintRules;
  env: {
    es6: boolean;
    browser: boolean;
    node: boolean;
  };
  settings?: {
    react: {
      version: string;
    };
    "import/resolver": {
      node: {
        extensions: string[];
      };
    };
  };
}

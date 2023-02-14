import { devDependencies } from "./differ-execution.js";
import { generateESLintRc } from "./common/generate-eslintrc.js";
import { esLintRCBasic } from "./common/json-contents.js";
import { updatePackageJson } from "./common/update-package-json-script.js";
import { getWarningMessage } from "./interface/messages.js";

const installESlint = () => {
  devDependencies.push("eslint@8.24.0");
  devDependencies.push("eslint-config-prettier@8.5.0");
  devDependencies.push("eslint-import-resolver-typescript@3.5.1");
  devDependencies.push("@typescript-eslint/eslint-plugin@5.40.1");
  devDependencies.push("@typescript-eslint/parser@5.40.1");
};

export const setupESlint = (projectName: string) => {
  installESlint();
  generateESLintRc(projectName, esLintRCBasic);
  updatePackageJson(projectName, {
    lint: 'eslint "src/**/*.{ts,tsx}" --quiet',
  });
  getWarningMessage("To be install", "ESLint");
};

import { $ } from "zx";
import { generateESLintRc } from "./common/generate-eslintrc.js";
import { esLintRCBasic } from "./common/json-contents.js";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJson } from "./common/update-package-json-script.js";

const installESlint = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D eslint@8.24.0 eslint-config-prettier@8.5.0 eslint-import-resolver-typescript@3.5.1 @typescript-eslint/eslint-plugin@5.40.1 @typescript-eslint/parser@5.40.1 ;`;

export const setupESlint = async (projectName: string) => {
  await installESlint(projectName);
  generateESLintRc(projectName, esLintRCBasic);
  updatePackageJson(projectName, {
    lint: 'eslint "src/**/*.{ts,tsx}" --quiet',
  });
};

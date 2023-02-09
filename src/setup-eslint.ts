import { $ } from "zx";
import { generateESLintRc } from "./common/generate-eslintrc.js";
import { esLintRC } from "./common/json-contents.js";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJson } from "./common/update-package-json-script.js";

const installESlint = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D eslint@8.24.0 eslint-config-prettier@8.5.0 ;`;

export const setupESlint = async (projectName: string) => {
  await installESlint(projectName);
  generateESLintRc(projectName, esLintRC);
  updatePackageJson(projectName, {
    lint: 'eslint "src/**/*.{js,jsx}" --quiet',
  });
};

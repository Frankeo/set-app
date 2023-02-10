import { $, fs } from "zx";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJson } from "./common/update-package-json-script.js";

const installPrettier = async (projectName: string) =>
  $`cd ${getProjectPath(projectName)} ; yarn add -D prettier@2.7.1 ;`;

const createPrettierRC = (projectName: string) => {
  fs.createFileSync(`${projectName}/.prettierrc`);
  fs.appendFileSync(`${projectName}/.prettierrc`, "{}");
};

export const setupPrettier = async (projectName: string) => {
  await installPrettier(projectName);
  createPrettierRC(projectName);
  updatePackageJson(projectName, {
    format: 'prettier --write "src/**/*.{ts,tsx}"',
    "check-format": 'prettier --check "src/**/*.{ts,tsx}"',
  });
};

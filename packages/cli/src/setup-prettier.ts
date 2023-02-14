import { fs } from "zx";
import { devDependencies } from "./differ-execution.js";
import { updatePackageJson } from "./common/update-package-json-script.js";
import { getWarningMessage } from "./interface/messages.js";

const installPrettier = () => devDependencies.push("prettier@2.7.1");

const createPrettierRC = (projectName: string) => {
  fs.appendFileSync(`${projectName}/.prettierrc`, "{}");
};

export const setupPrettier = (projectName: string) => {
  installPrettier();
  createPrettierRC(projectName);
  updatePackageJson(projectName, {
    format: 'prettier --write "src/**/*.{ts,tsx}"',
    "check-format": 'prettier --check "src/**/*.{ts,tsx}"',
  });
  getWarningMessage("To be install", "Prettier");
};

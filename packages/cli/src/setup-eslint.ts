import { $ } from "zx";
import { generateESLintRc } from "./common/generate-eslintrc.js";
import { esLintRCBasic } from "./common/json-contents.js";
import { addDevDependency } from "./common/package-manager.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const installESlint = async (projectName: string) => {
  const dependencies = [
    "eslint@8.24.0",
    "eslint-config-prettier@8.5.0",
    "eslint-import-resolver-typescript@3.5.3",
    "@typescript-eslint/eslint-plugin@5.40.1",
    "@typescript-eslint/parser@5.40.1",
  ];
  const dependency = await addDevDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

export const setupESlint = async (projectName: string) =>
  getTaskWrapper("Installing", "Installed", "ESLint", async () => {
    await installESlint(projectName);
    generateESLintRc(projectName, esLintRCBasic);
    updatePackageJsonScripts(projectName, {
      lint: "eslint . --quiet",
    });
  });

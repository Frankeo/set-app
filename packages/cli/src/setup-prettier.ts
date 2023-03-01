import { fs, $ } from "zx";
import { addDevDependency } from "./common/package-manager.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const installPrettier = async (projectName: string) => {
  const dependency = await addDevDependency("prettier@2.7.1");
  await $`cd ${projectName} ; ${dependency}`;
};

const createPrettierRC = (projectName: string) => {
  fs.appendFileSync(`${projectName}/.prettierrc`, "{}");
};

export const setupPrettier = async (projectName: string) =>
  getTaskWrapper("Installing", "Installed", "Prettier", async () => {
    await installPrettier(projectName);
    createPrettierRC(projectName);
    updatePackageJsonScripts(projectName, {
      format: "prettier --write .",
      "check-format": "prettier --check .",
    });
  });

export const formatProject = async (projectName: string) =>
  getTaskWrapper("Formating", "Formated", projectName, async () => {
    await $`cd ${projectName} ; yarn format`;
  });

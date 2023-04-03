import { fs, $ } from "zx";
import {
  addDevDependency,
  execCommandManager,
} from "./common/package-manager.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const installPrettier = async (projectName: string) => {
  const dependency = await addDevDependency("prettier@2.7.1");
  await $`cd ${projectName} ; ${dependency}`;
};

const createPrettierRC = (projectName: string) => {
  fs.appendFileSync(`${projectName}/.prettierrc`, "{}");
};

const createPrettierIgnore = (projectName: string) => {
  fs.appendFileSync(`${projectName}/.prettierignore`, "dist");
};

export const setupPrettier = async (projectName: string) =>
  getTaskWrapper("Installing", "Installed", "Prettier", async () => {
    await installPrettier(projectName);
    createPrettierRC(projectName);
    createPrettierIgnore(projectName);
    updatePackageJsonScripts(projectName, {
      format: "prettier --write .",
      "check-format": "prettier --check .",
    });
  });

export const formatProject = async (projectName: string) =>
  getTaskWrapper("Formating", "Formated", projectName, async () => {
    const execCommand = await execCommandManager();
    await $`cd ${projectName} ; ${execCommand} format`;
  });

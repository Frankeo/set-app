import { $ } from "zx";
import {
  addDevDependency,
  detectPackageManager,
  execCommandManager,
} from "./common/package-manager.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const installHusky = async (projectName: string) => {
  const dependencies = ["husky@8.0.0", "pinst@3.0.0"];
  const dependency = await addDevDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

const configPreCommit = async (projectName: string) => {
  const execCommand = await execCommandManager();
  await $`cd ${projectName} ; npx husky add .husky/pre-commit "${execCommand} pre-commit"`;
};

export const setupHusky = async (projectName: string) =>
  getTaskWrapper("Installing", "Installed", "Husky", async () => {
    const execCommand = await execCommandManager();
    const manager = await detectPackageManager();
    updatePackageJsonScripts(projectName, {
      postinstall: "husky install",
      prepack: "pinst --disable",
      postpack: "pinst --enable",
      "pre-commit": `${execCommand} test && ${execCommand} lint && ${execCommand} check-format && ${execCommand} typecheck`,
    });
    await installHusky(projectName);
    if (manager == "npm")
      await $`cd ${projectName} ; ${execCommand} postinstall`;
    await configPreCommit(projectName);
  });

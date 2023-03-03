import { $ } from "zx";
import { addDevDependency } from "./common/package-manager.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const installHusky = async (projectName: string) => {
  const dependencies = ["husky@8.0.0", "pinst@3.0.0"];
  const dependency = await addDevDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

const configPreCommit = async (projectName: string) => {
  await $`cd ${projectName} ; npx husky add .husky/pre-commit "yarn pre-commit"`;
};

export const setupHusky = async (projectName: string) =>
  getTaskWrapper("Installing", "Installed", "Husky", async () => {
    updatePackageJsonScripts(projectName, {
      postinstall: "husky install",
      prepack: "pinst --disable",
      postpack: "pinst --enable",
      "pre-commit":
        "yarn test && yarn lint && yarn check-format && yarn typecheck",
    });
    await installHusky(projectName);
    await configPreCommit(projectName);
  });

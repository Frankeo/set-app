import { fs, $ } from "zx";
import { tsConfigBasic } from "./common/json-contents.js";
import { addDevDependency } from "./common/package-manager.js";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const installTypescript = async (projectName: string) => {
  const dependency = await addDevDependency("typescript@4.8.4");
  await $`cd ${projectName} ; ${dependency}`;
};

const createTsConfig = (projectName: string) => {
  const tsConfigFile = `${getProjectPath(projectName)}/tsconfig.json`;
  fs.createFileSync(tsConfigFile);
  fs.writeJSONSync(tsConfigFile, tsConfigBasic);
};

export const setupTypescript = async (projectName: string) =>
  getTaskWrapper("Installing", "Installed", "Typescript", async () => {
    await installTypescript(projectName);
    createTsConfig(projectName);
    updatePackageJsonScripts(projectName, {
      typecheck: "tsc --noEmit",
    });
  });

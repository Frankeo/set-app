import { $ } from "zx";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJsonDependencies } from "./common/update-package-json-script.js";
import { generateLoader, getSuccessMessage } from "./interface/messages.js";

export const devDependencies: string[] = [];
export const dependencies: string[] = [];

export const executeDependencies = async (projectName: string) => {
  const projectPath = getProjectPath(projectName);
  updatePackageJsonDependencies(projectName);
  const loader = generateLoader("Installing all dependencies");
  await $`cd ${projectPath} ; yarn install`;
  loader.stop();
  getSuccessMessage("installed", "All dependencies");
};

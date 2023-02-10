import { $, fs } from "zx";
import { tsConfigBasic } from "./common/json-contents.js";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJson } from "./common/update-package-json-script.js";

const installTypescript = async (projectName: string) =>
  $`cd ${getProjectPath(projectName)} ; yarn add -D typescript@4.8.4`;

const createTsConfig = (projectName: string) => {
  const tsConfigFile = `${getProjectPath(projectName)}/tsconfig.json`;
  fs.createFileSync(tsConfigFile);
  fs.writeJSONSync(tsConfigFile, tsConfigBasic);
};

export const setupTypescript = async (projectName: string) => {
  await installTypescript(projectName);
  createTsConfig(projectName);
  updatePackageJson(projectName, {
    typecheck: "tsc --noEmit",
  });
};

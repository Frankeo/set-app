import { fs } from "zx";
import { tsConfigBasic } from "./common/json-contents.js";
import { getProjectPath } from "./common/paths.js";
import {
  devDependencies,
  updatePackageJsonScripts,
} from "./common/update-package-json-script.js";
import { getWarningMessage } from "./interface/messages.js";

const installTypescript = () => devDependencies.push("typescript@4.8.4");

const createTsConfig = (projectName: string) => {
  const tsConfigFile = `${getProjectPath(projectName)}/tsconfig.json`;
  fs.createFileSync(tsConfigFile);
  fs.writeJSONSync(tsConfigFile, tsConfigBasic);
};

export const setupTypescript = (projectName: string) => {
  installTypescript();
  createTsConfig(projectName);
  updatePackageJsonScripts(projectName, {
    typecheck: "tsc --noEmit",
  });
  getWarningMessage("To be install", "Typescript");
};
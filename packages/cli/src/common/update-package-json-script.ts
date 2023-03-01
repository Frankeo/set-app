import { fs } from "zx";
import { getPackageJson } from "./paths.js";
import { PackageJSON, ScriptCommands } from "./types.js";

export const updatePackageJsonScripts = (
  projectName: string,
  commands: ScriptCommands
) => {
  const packageJsonFile = getPackageJson(projectName);
  const packageJSON: PackageJSON = fs.readJSONSync(packageJsonFile);
  packageJSON.scripts = {
    ...packageJSON.scripts,
    ...commands,
  };
  fs.writeJSONSync(packageJsonFile, packageJSON);
};

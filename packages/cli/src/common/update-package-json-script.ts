import { fs } from "zx";
import { dependencies, devDependencies } from "../differ-execution.js";
import { getPackageJson } from "./paths.js";
import { Dependencies, PackageJSON, ScriptCommands } from "./types.js";

export const updatePackageJson = (
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

const convertIntoDependency = (dependencies: string[]) =>
  dependencies.reduce((obj, devDep) => {
    const key = devDep.split(/@\d+\.\d+\.\d+/)[0];
    const value = devDep.match(/\d+\.\d+\.\d+/)![0];
    obj[key] = value;
    return obj;
  }, {} as Dependencies);

export const updatePackageJsonDependencies = (projectName: string) => {
  const packageJsonFile = getPackageJson(projectName);
  const packageJSON: PackageJSON = fs.readJSONSync(packageJsonFile);
  packageJSON.devDependencies = convertIntoDependency(devDependencies);
  packageJSON.dependencies = convertIntoDependency(dependencies);
  fs.writeJSONSync(packageJsonFile, packageJSON);
};

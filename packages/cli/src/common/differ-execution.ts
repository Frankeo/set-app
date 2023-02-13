import { $ } from "zx";
import { getProjectPath } from "./paths.js";

export const devDependencies: string[] = [];
export const dependencies: string[] = [];

const removeBadSustitution = (str: string) =>
  str.replace(new RegExp(/\$'[^']*'/, "g"), (value) =>
    value.replace(new RegExp(/(\$')|(')/, "g"), "")
  );

export const executeDependencies = async (projectName: string) => {
  $.quote = removeBadSustitution;
  const projectPath = getProjectPath(projectName);
  const devDependencyCommand = `yarn add -D ${devDependencies.join(" ")}`;
  const dependencyCommand = `yarn add ${dependencies.join(" ")}`;
  return $`cd ${projectPath} ; ${dependencyCommand} ; ${devDependencyCommand}`;
};

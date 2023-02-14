import { mkdirSync, existsSync } from "fs";
import { getProjectPath, getSrcPath } from "./common/paths.js";
import { getSuccessMessage } from "./interface/messages.js";

export const createProjectStructure = (name: string) => {
  const projectDirectory = getProjectPath(name);
  if (existsSync(projectDirectory))
    throw new Error(`Project ${name} already exists!`);

  mkdirSync(projectDirectory);
  getSuccessMessage("created", projectDirectory);
  const sourceDirectory = getSrcPath(name);
  getSuccessMessage("created", sourceDirectory);
  mkdirSync(sourceDirectory);
};

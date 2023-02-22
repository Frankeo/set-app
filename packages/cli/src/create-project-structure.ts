import { mkdirSync, existsSync } from "fs";
import { getProjectPath, getSrcPath } from "./common/paths.js";
import { getSuccessMessage } from "./interface/messages.js";

export const createProjectErrorMessage = (name: string) =>
  `Project ${name} already exists!`;

export const createProjectStructure = (name: string) => {
  const projectDirectory = getProjectPath(name);
  if (existsSync(projectDirectory))
    throw new Error(createProjectErrorMessage(name));

  mkdirSync(projectDirectory);
  getSuccessMessage("created", projectDirectory);
  const sourceDirectory = getSrcPath(name);
  getSuccessMessage("created", sourceDirectory);
  mkdirSync(sourceDirectory);
};

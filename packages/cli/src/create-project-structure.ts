import { mkdirSync, existsSync } from "fs";
import { getProjectPath, getSrcPath } from "./common/paths.js";

export const createProjectStructure = (name: string) => {
  const projectDirectory = getProjectPath(name);
  if (existsSync(projectDirectory))
    throw new Error(`Project ${name} already exists!`);

  mkdirSync(projectDirectory);
  const sourceDirectory = getSrcPath(name);
  mkdirSync(sourceDirectory);
};

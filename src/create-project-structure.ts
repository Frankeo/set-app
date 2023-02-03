import { mkdirSync, existsSync } from "fs";
import { join } from "path";

export const createProjectStructure = (name: string): string => {
  const projectDirectory = join(process.cwd(), name);
  if (existsSync(projectDirectory))
    throw new Error(`Project ${name} already exists!`);
  mkdirSync(projectDirectory);
  const sourceDirectory = join(projectDirectory, "src");
  mkdirSync(sourceDirectory);
  return projectDirectory;
};

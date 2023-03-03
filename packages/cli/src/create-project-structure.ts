import { mkdirSync, existsSync } from "fs";
import { getProjectPath, getSrcPath } from "./common/paths.js";
import { createGithubRepo } from "./create-github-repo.js";
import { getSuccessMessage } from "./interface/messages.js";

export const createProjectErrorMessage = (name: string) =>
  `Project ${name} already exists!`;

export const createProjectStructure = async (
  name: string,
  github: boolean,
  desc?: string
) => {
  const projectDirectory = getProjectPath(name);
  if (existsSync(projectDirectory))
    throw new Error(createProjectErrorMessage(name));

  if (github) await createGithubRepo(name, desc);
  else {
    mkdirSync(projectDirectory);
    getSuccessMessage("Created", projectDirectory);
  }
  const sourceDirectory = getSrcPath(name);
  mkdirSync(sourceDirectory);
  getSuccessMessage("Created", sourceDirectory);
};

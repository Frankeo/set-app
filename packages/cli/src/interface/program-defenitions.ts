import { program } from "commander";
import { createProjectAction } from "./create-project-action.js";
import { getProjectVersion } from "./get-project-version.js";

export const createTool = () =>
  program
    .name("set-app")
    .description("Create and setup node projects")
    .argument("<name>", "project name")
    .option(
      "-t, --type <value>",
      "Choose: React, React-Redux or Console",
      "React"
    )
    .option("--desc <value>", "Add a description to your new project")
    .option("--no-github", "Not generate github public repository")
    .version(getProjectVersion())
    .action(createProjectAction);

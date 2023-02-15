import { program } from "commander";
import { createProjectAction } from "./create-project-action.js";

export const createTool = () =>
  program
    .name("setapp")
    .description("Create and setup node projects")
    .argument("<name>", "project name")
    .option(
      "-t, --type <value>",
      "Choose: React, React-Redux or Console",
      "React"
    )
    .action(createProjectAction);

import { Command, Option } from "commander";
import { createProjectAction } from "./create-project-action.js";
import { getProjectVersion } from "../common/get-project-version.js";
import { getErrorMessage } from "./messages.js";

export const createTool = () =>
  new Command()
    .configureOutput({
      writeErr: (str) => process.stdout.write(getErrorMessage(str)),
    })
    .description("Create and setup node projects")
    .argument("<name>", "project name")
    .addOption(
      new Option("-t, --type <value>", "Type of node project")
        .choices(["react", "react-redux", "console"])
        .default("react")
    )
    .option("--desc <value>", "Add a description to your new project")
    .option("--no-github", "Not generate github public repository")
    .version(getProjectVersion())
    .action(createProjectAction);

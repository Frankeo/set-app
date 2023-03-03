import { $ } from "zx";
import { getTaskWrapper } from "./interface/task-wrapper.js";

export const createPackageJson = async (
  projectDirectory: string,
  description?: string
) =>
  getTaskWrapper("Creating", "Created", "package.json", async () => {
    let packageDescription = "";
    if (description)
      packageDescription = `npm pkg set description="${description}"`;
    await $`cd ${projectDirectory} ; npm init -y ; ${packageDescription}`;
  });

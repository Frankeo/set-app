import { $ } from "zx";
import { getSuccessMessage } from "./interface/messages.js";

export const createPackageJson = async (
  projectDirectory: string,
  description: string
) => {
  await $`cd ${projectDirectory} ; npm init -y ; npm pkg set description=${
    description ?? " "
  }`;
  getSuccessMessage("created", "package.json");
};

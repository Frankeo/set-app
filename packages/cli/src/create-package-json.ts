import { $ } from "zx";
import { getSuccessMessage } from "./interface/messages.js";

export const createPackageJson = async (projectDirectory: string) => {
  await $`cd ${projectDirectory} ; yarn init -y ;`;
  getSuccessMessage("created", "package.json");
};

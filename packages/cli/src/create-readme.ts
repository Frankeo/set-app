import { $ } from "zx";
import { getSuccessMessage } from "./interface/messages.js";

export const createReadme = async (projectPath: string) => {
  await $`cd ${projectPath} ; npx readme-md-generator -y ;`;
  getSuccessMessage("created", "README.md");
};

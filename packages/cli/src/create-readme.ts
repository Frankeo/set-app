import { $ } from "zx";
import { getTaskWrapper } from "./interface/task-wrapper.js";

export const createReadme = async (projectPath: string) =>
  getTaskWrapper("Creating", "Created", "README.md", async () => {
    await $`cd ${projectPath} ; npx --yes readme-md-generator -y ;`;
  });

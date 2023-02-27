import { $, fs } from "zx";
import { getProjectPath } from "./common/paths.js";
import { getSuccessMessage } from "./interface/messages.js";

const installGit = async (projectName: string) =>
  $`git init ${getProjectPath(projectName)} ;`;

const ignored = [
  "node_modules/",
  "dist/",
  ".parcel-cache/",
  ".env",
  ".DS_Store",
  "coverage/",
  ".vscode/",
];

const createGitIgnore = (projectName: string) => {
  const gitIgnoreFile = `${projectName}/.gitignore`;
  fs.createFileSync(gitIgnoreFile);
  fs.appendFileSync(gitIgnoreFile, ignored.join("\n"));
};

export const setupGit = async (projectDirectory: string, github: boolean) => {
  if (!github) {
    await installGit(projectDirectory);
    getSuccessMessage("installed", "Git");
  }
  createGitIgnore(projectDirectory);
};

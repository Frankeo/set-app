import { $, fs } from "zx";
import { getProjectPath } from "./common/paths.js";

const installGit = async (projectName: string) =>
  $`git init ${getProjectPath(projectName)} ;`;

const ignored = [
  "node_modules/",
  "dist/",
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

export const setupGit = async (projectDirectory: string) => {
  await installGit(projectDirectory);
  createGitIgnore(projectDirectory);
};

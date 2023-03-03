import { $, fs } from "zx";
import { addDevDependency } from "./common/package-manager.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const installCommitLint = async (projectName: string) => {
  const dependencies = [
    "@commitlint/cli@17.4.2",
    "@commitlint/config-conventional@17.4.2",
  ];
  const dependency = await addDevDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

const createCommitLintRC = (projectName: string) => {
  fs.appendFileSync(
    `${projectName}/.commitlintrc.json`,
    "{'extends': ['@commitlint/config-conventional']}"
  );
};

const configPrepareCommitMessage = async (projectName: string) => {
  await $`cd ${projectName} ; npx husky add .husky/prepare-commit-msg 'npx --no-install commitlint --edit "$1"'`;
};

export const setupCommitLint = async (projectName: string) =>
  getTaskWrapper("Installing", "Installed", "CommitLint", async () => {
    await installCommitLint(projectName);
    createCommitLintRC(projectName);
    await configPrepareCommitMessage(projectName);
  });

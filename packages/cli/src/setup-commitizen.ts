import { $, fs } from "zx";
import { addDevDependency } from "./common/package-manager.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const installCommitizen = async (projectName: string) => {
  const dependencies = ["commitizen@4.3.0", "cz-conventional-changelog@3.3.0"];
  const dependency = await addDevDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

const createCzrc = (projectName: string) => {
  fs.appendFileSync(
    `${projectName}/.czrc`,
    '{"path": "cz-conventional-changelog"}'
  );
};

const updatePrepareCommitMessage = (projectName: string) => {
  fs.appendFileSync(
    `${projectName}/.husky/prepare-commit-msg`,
    "exec < /dev/tty && node_modules/.bin/cz --hook || true"
  );
};

export const setupCommitizen = async (projectName: string) =>
  getTaskWrapper("Installing", "Installed", "Commitizen", async () => {
    await installCommitizen(projectName);
    createCzrc(projectName);
    updatePrepareCommitMessage(projectName);
  });

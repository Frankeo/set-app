import { fs } from "zx";
import { devContainerConfig } from "./common/json-contents.js";
import { getDevContainer, getDevContainerJson } from "./common/paths.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

export const setupDevContainer = async (projectName: string) =>
  getTaskWrapper("Creating", "Created", "DevContainer", async () => {
    const devContainerDirectory = getDevContainer(projectName);
    fs.mkdirSync(devContainerDirectory);
    const devContainerJson = getDevContainerJson(projectName);
    fs.createFileSync(devContainerJson);
    fs.writeJSONSync(devContainerJson, devContainerConfig);
  });

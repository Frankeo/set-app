import { $ } from "zx";
import { addDependency } from "./common/package-manager.js";
import { ExampleOptions } from "./common/types.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const installReactRedux = async (projectName: string) => {
  const dependency = await addDependency("react-redux@8.0.4");
  await $`cd ${projectName} ; ${dependency}`;
};
const installReduxToolkit = async (projectName: string) => {
  const dependency = await addDependency("@reduxjs/toolkit@1.8.6");
  await $`cd ${projectName} ; ${dependency}`;
};

export const setupRedux = async (projectName: string, type: ExampleOptions) => {
  if (type.toUpperCase() !== ExampleOptions.REDUX) return;
  await getTaskWrapper("Installing", "Installed", "Redux", async () => {
    await installReactRedux(projectName);
    await installReduxToolkit(projectName);
  });
};

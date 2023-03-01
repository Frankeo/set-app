import { generateESLintRc } from "./common/generate-eslintrc.js";
import { esLintRCReact } from "./common/json-contents.js";
import { setupViteForReact } from "./setup-vite-react.js";
import { ExampleOptions } from "./common/types.js";

import { getTaskWrapper } from "./interface/task-wrapper.js";
import { addDependency, addDevDependency } from "./common/package-manager.js";
import { $ } from "zx";

const installReact = async (projectName: string) => {
  const dependencies = ["react@18.2.0", "react-dom@18.2.0"];
  const dependency = await addDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

const installReactTypes = async (projectName: string) => {
  const dependencies = ["@types/react@18.0.21", "@types/react-dom@18.0.6"];
  const dependency = await addDevDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

const installReactRouter = async (projectName: string) => {
  const dependency = await addDependency("react-router-dom@6.4.1");
  await $`cd ${projectName} ; ${dependency}`;
};

const installReactQuery = async (projectName: string) => {
  const dependency = await addDependency("@tanstack/react-query@4.10.1");
  await $`cd ${projectName} ; ${dependency}`;
};

const installEsLintForReact = async (projectName: string) => {
  const dependencies = [
    "eslint-plugin-import@2.26.0",
    "eslint-plugin-jsx-a11y@6.6.1",
    "eslint-plugin-react@7.31.8",
    "eslint-plugin-react-hooks@4.6.0",
  ];
  const dependency = await addDevDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

const updateEsLintRc = (projectName: string) =>
  generateESLintRc(projectName, esLintRCReact);

export const setupReact = async (projectName: string, type: ExampleOptions) =>
  getTaskWrapper("Installing", "Installed", "React", async () => {
    await installReact(projectName);
    await installReactTypes(projectName);
    await installEsLintForReact(projectName);
    await installReactRouter(projectName);
    await installReactQuery(projectName);
    updateEsLintRc(projectName);
    await setupViteForReact(projectName, type);
  });

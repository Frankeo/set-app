import { $, fs } from "zx";
import {
  getExample,
  getExampleSrc,
  getProjectPath,
  getSrcPath,
} from "./common/paths.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { ExampleOptions } from "./common/types.js";
import { addDevDependency } from "./common/package-manager.js";

const installVite = async (projectName: string) => {
  const dependencies = ["vite@4.1.4", "@vitejs/plugin-react-swc@3.0.0"];
  const dependency = await addDevDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

const installVitest = async (projectName: string) => {
  const dependencies = [
    "@testing-library/react@13.4.0",
    "happy-dom@7.6.0",
    "vitest-fetch-mock@0.2.1",
  ];
  const dependency = await addDevDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

const createViteConfig = (projectName: string, type: ExampleOptions) => {
  const viteConfigFileSrc = `${getExample(type)}/vite.config.ts`;
  const viteConfigFileDest = `${getProjectPath(projectName)}/vite.config.ts`;
  fs.copyFileSync(viteConfigFileSrc, viteConfigFileDest);
};

const createSrcOutput = (projectName: string, type: ExampleOptions) => {
  const exampleSrcPath = getExampleSrc(type);
  fs.copySync(exampleSrcPath, getSrcPath(projectName), { overwrite: true });
};

export const setupViteForReact = async (
  projectName: string,
  type: ExampleOptions
) => {
  await installVite(projectName);
  await installVitest(projectName);
  createViteConfig(projectName, type);
  createSrcOutput(projectName, type);
  updatePackageJsonScripts(projectName, {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
  });
};

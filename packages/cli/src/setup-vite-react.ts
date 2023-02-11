import { $, fs } from "zx";
import {
  getExample,
  getExampleSrc,
  getProjectPath,
  getSrcPath,
} from "./common/paths.js";
import { updatePackageJson } from "./common/update-package-json-script.js";

const installVite = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D vite@3.1.4 @vitejs/plugin-react@2.1.0 ;`;

const installVitest = (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D @testing-library/react@13.4.0 happy-dom@7.6.0 vitest-fetch-mock@0.2.1 ;`;

const createViteConfig = async (projectName: string) => {
  const viteConfigFileSrc = `${getExample("REACT")}/vite.config.ts`;
  const viteConfigFileDest = `${getProjectPath(projectName)}/vite.config.ts`;
  fs.copyFileSync(viteConfigFileSrc, viteConfigFileDest);
};

const createSrcOutput = async (projectName: string) => {
  const exampleSrcPath = getExampleSrc("REACT");
  fs.copySync(exampleSrcPath, getSrcPath(projectName), { overwrite: true });
};

export const setupViteForReact = async (projectName: string) => {
  await installVite(projectName);
  await installVitest(projectName);
  updatePackageJson(projectName, {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
  });
  createViteConfig(projectName);
  createSrcOutput(projectName);
};

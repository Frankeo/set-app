import { $, fs } from "zx";
import { getProjectPath, getSrcPath } from "./common/paths.js";
import { updatePackageJson } from "./common/update-package-json-script.js";

const installVite = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D vite@3.1.4 @vitejs/plugin-react@2.1.0 ;`;

const installVitest = (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D @testing-library/react@13.4.0 happy-dom@7.6.0 vitest-fetch-mock@0.2.1 ;`;

export const setupViteForReact = async (projectName: string) => {
  await installVite(projectName);
  await installVitest(projectName);
  // createViteConfig(projectName);
  updatePackageJson(projectName, {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
  });
};

import { fs } from "zx";
import { devDependencies } from "./differ-execution.js";
import {
  getExample,
  getExampleSrc,
  getProjectPath,
  getSrcPath,
} from "./common/paths.js";
import { updatePackageJson } from "./common/update-package-json-script.js";
import { ExampleOptions } from "./common/types.js";

const installVite = () => {
  devDependencies.push("vite@3.1.4");
  devDependencies.push("@vitejs/plugin-react@2.1.0");
};

const installVitest = () => {
  devDependencies.push("@testing-library/react@13.4.0");
  devDependencies.push("happy-dom@7.6.0");
  devDependencies.push("vitest-fetch-mock@0.2.1");
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

export const setupViteForReact = (
  projectName: string,
  type: ExampleOptions
) => {
  installVite();
  installVitest();
  createViteConfig(projectName, type);
  createSrcOutput(projectName, type);
  updatePackageJson(projectName, {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
  });
};

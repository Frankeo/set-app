import { $, fs } from "zx";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJson } from "./common/update-package-json-script.js";

const viteImportsConfig = [
  `import { defineConfig } from "vite";`,
  `import react from "@vitejs/plugin-react";`,
];
const viteConfig = `{
  plugins: [react()],
  root: "src",
}`;
const viteExportConfig = `export default defineConfig(${viteConfig});`;

const installVite = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D vite@3.1.4 @vitejs/plugin-react@2.1.0 ;`;

const createViteConfig = (projectName: string) => {
  const viteConfigFile = `${getProjectPath(projectName)}/vite.config.js`;
  const viteConfig = [...viteImportsConfig, viteExportConfig].join("\n");
  fs.createFileSync(viteConfigFile);
  fs.writeFileSync(viteConfigFile, viteConfig);
};

export const setupVite = async (projectName: string) => {
  await installVite(projectName);
  createViteConfig(projectName);
  updatePackageJson(projectName, {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
  });
};

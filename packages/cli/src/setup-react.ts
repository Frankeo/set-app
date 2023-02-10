import { $ } from "zx";
import { generateESLintRc } from "./common/generate-eslintrc.js";
import { esLintRCReact } from "./common/json-contents.js";
import { getProjectPath } from "./common/paths.js";
import { setupViteForReact } from "./setup-vite-react.js";

const installReact = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add react@18.2.0 react-dom@18.2.0 ;`;

const installReactTypes = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D @types/react@18.0.21 @types/react-dom@18.0.6 ;`;

const installReactRouter = async (projectName: string) =>
  $`cd ${getProjectPath(projectName)} ; yarn add react-router-dom@6.4.1 ;`;

const installReactQuery = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add @tanstack/react-query@4.10.1 ;`;

const installEsLintForReact = (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8 eslint-plugin-react-hooks@4.6.0 ;`;

const updateEsLintRc = (projectName: string) =>
  generateESLintRc(projectName, esLintRCReact);

export const setupReact = async (projectName: string) => {
  await installReact(projectName);
  await installReactTypes(projectName);
  await installEsLintForReact(projectName);
  await updateEsLintRc(projectName);
  await installReactRouter(projectName);
  await installReactQuery(projectName);
  await setupViteForReact(projectName);
};

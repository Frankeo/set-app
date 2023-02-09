import { $ } from "zx";
import { bodiesIndex } from "./common/create-index-html.js";
import { esLintRC } from "./common/json-contents.js";
import { getProjectPath } from "./common/paths.js";

const installESLintHook = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D eslint-plugin-react-hooks@4.6.0 ;`;

const installReact = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add react@18.2.0 react-dom@18.2.0 ;`;

const installReactRouter = async (projectName: string) =>
  $`cd ${getProjectPath(projectName)} ; yarn add react-router-dom@6.4.1 ;`;

const installReactQuery = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add @tanstack/react-query@4.10.1 ;`;

const addPortalsHtml = () => {
  bodiesIndex.push('<div id="modal"></div>');
};

export const setupReact = async (projectName: string) => {
  await installReact(projectName);
  await installESLintHook(projectName);
  esLintRC.extends = ["plugin:react-hooks/recommended", ...esLintRC.extends];
  await installReactRouter(projectName);
  await installReactQuery(projectName);
  addPortalsHtml();
};

import { join, dirname } from "path";
import { dirName } from "../get-dir-name.js";

import { ExampleOptions } from "./types.js";

export const getProjectPath = (name: string) => join(process.cwd(), name);

const getToolDirectory = () => dirname(process.argv[1]);

export const getCopyFolder = (name: string) => join(getToolDirectory(), name);

export const getPackageJson = (name: string) =>
  join(getProjectPath(name), "package.json");

export const getSrcPath = (name: string) => join(getProjectPath(name), "src");

export const getIndexHtml = (name: string) =>
  join(getSrcPath(name), "index.html");

export const getEslintRc = (name: string) =>
  join(getProjectPath(name), ".eslintrc.json");

export const getProdEnv = () => join(dirName(), ".env");

export const getExample = (exampleName: ExampleOptions) => {
  const fullExampleName = `EXAMPLE_${exampleName.toUpperCase()}`;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const examplePath = process.env[fullExampleName]!;
  return join(dirName(), examplePath);
};

export const getExampleSrc = (exampleName: ExampleOptions): string => {
  const exampleSrc = getExample(exampleName);
  return join(exampleSrc, process.env.NODE_ENV ? "src" : "examples-src");
};

export const getDevContainer = (name: string): string => {
  const projectPath = getProjectPath(name);
  return join(projectPath, ".devcontainer");
};

export const getDevContainerJson = (name: string): string => {
  const devContainer = getDevContainer(name);
  return join(devContainer, "devcontainer.json");
};

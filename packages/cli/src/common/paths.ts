import { join, dirname } from "path";
import { dirName } from "../index.js";
import { Examples } from "./types.js";

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

export const getExample = (exampleName: Examples) => {
  const fullExampleName = `EXAMPLE_${exampleName}`;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const examplePath = process.env[fullExampleName]!;
  const exampleFullPath = process.env.NODE_ENV
    ? examplePath
    : join(dirName(), examplePath);
  if (!exampleFullPath) throw new Error("No Example directory found!");
  return exampleFullPath;
};

export const getExampleSrc = (exampleName: Examples): string => {
  const exampleSrc = getExample(exampleName);
  return join(exampleSrc, "src");
};

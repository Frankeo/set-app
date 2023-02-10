import { join, dirname } from "path";

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

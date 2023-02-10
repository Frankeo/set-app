import { fs } from "zx";
import { getEslintRc } from "./paths.js";
import { ESLintRC } from "./types.js";

export const generateESLintRc = (projectName: string, esLintRC: ESLintRC) => {
  const eslintFile = getEslintRc(projectName);
  fs.createFileSync(eslintFile);
  fs.writeJSONSync(eslintFile, esLintRC);
};

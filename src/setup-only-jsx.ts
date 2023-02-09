import { $, fs } from "zx";
import { getCopyFolder, getProjectPath, getSrcPath } from "./common/paths.js";
import { bodiesIndex, createIndexHtml } from "./common/create-index-html.js";
import { esLintRC } from "./common/json-contents.js";
import { generateESLintRc } from "./common/generate-eslintrc.js";

const createApp = (projectName: string) => {
  fs.copySync(getCopyFolder("full-content"), getSrcPath(projectName), {
    overwrite: false,
  });
};

const generateIndexHtml = (projectName: string) => {
  bodiesIndex.push('<script type="module" src="./App.jsx"></script>');
  createIndexHtml(projectName);
};

const installEsLintForReact = (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8 ;`;

const updateEsLintRc = (projectName: string) => {
  esLintRC.extends = [
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    ...esLintRC.extends,
  ];
  esLintRC.rules = {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
  };
  esLintRC.plugins = ["react", "import", "jsx-a11y"];
  esLintRC.settings = {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  };

  generateESLintRc(projectName, esLintRC);
};

export const setupOnlyJSX = async (projectName: string) => {
  await installEsLintForReact(projectName);
  generateIndexHtml(projectName);
  updateEsLintRc(projectName);
  createApp(projectName);
};

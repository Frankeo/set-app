import { dependencies, devDependencies } from "./differ-execution.js";
import { generateESLintRc } from "./common/generate-eslintrc.js";
import { esLintRCReact } from "./common/json-contents.js";
import { getWarningMessage } from "./interface/messages.js";
import { setupViteForReact } from "./setup-vite-react.js";

const installReact = () => {
  dependencies.push("react@18.2.0");
  dependencies.push("react-dom@18.2.0");
};

const installReactTypes = () => {
  devDependencies.push("@types/react@18.0.21");
  devDependencies.push("@types/react-dom@18.0.6");
};

const installReactRouter = () => dependencies.push("react-router-dom@6.4.1");

const installReactQuery = () =>
  dependencies.push("@tanstack/react-query@4.10.1");

const installEsLintForReact = () => {
  devDependencies.push("eslint-plugin-import@2.26.0");
  devDependencies.push("eslint-plugin-jsx-a11y@6.6.1");
  devDependencies.push("eslint-plugin-react@7.31.8");
  devDependencies.push("eslint-plugin-react-hooks@4.6.0");
};

const updateEsLintRc = (projectName: string) =>
  generateESLintRc(projectName, esLintRCReact);

export const setupReact = (projectName: string) => {
  installReact();
  installReactTypes();
  installEsLintForReact();
  installReactRouter();
  installReactQuery();
  updateEsLintRc(projectName);
  setupViteForReact(projectName);
  getWarningMessage("To be install", "React");
};

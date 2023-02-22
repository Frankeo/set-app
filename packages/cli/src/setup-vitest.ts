import {
  devDependencies,
  updatePackageJsonScripts,
} from "./common/update-package-json-script.js";
import { getWarningMessage } from "./interface/messages.js";

const installVitest = () => {
  devDependencies.push("vitest@0.24.3");
  devDependencies.push("@vitest/coverage-c8@0.28.4");
};

export const setupVitest = (projectName: string) => {
  installVitest();
  updatePackageJsonScripts(projectName, {
    test: "vitest --run --reporter=verbose",
    "test:watch": "vitest",
    coverage: "vitest run --coverage",
  });
  getWarningMessage("To be install", "Vitest");
};

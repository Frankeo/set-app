import { devDependencies } from "./differ-execution.js";
import { updatePackageJson } from "./common/update-package-json-script.js";
import { getWarningMessage } from "./interface/messages.js";

const installVitest = () => {
  devDependencies.push("vitest@0.24.3");
  devDependencies.push("@vitest/coverage-c8@0.28.4");
};

export const setupVitest = (projectName: string) => {
  installVitest();
  updatePackageJson(projectName, {
    test: "vitest --run",
    "test:watch": "vitest",
    coverage: "vitest run --coverage",
  });
  getWarningMessage("To be install", "Vitest");
};

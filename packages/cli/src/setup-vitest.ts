import { $ } from "zx";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJson } from "./common/update-package-json-script.js";

const installVitest = async (projectName: string) =>
  $`cd ${getProjectPath(
    projectName
  )} ; yarn add -D vitest@0.24.3 @vitest/coverage-c8@0.28.4 ;`;

export const setupVitest = async (projectName: string) => {
  await installVitest(projectName);
  updatePackageJson(projectName, {
    test: "vitest --run",
    "test:watch": "vitest",
    coverage: "vitest run --coverage",
  });
};

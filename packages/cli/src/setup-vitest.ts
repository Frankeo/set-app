import { $ } from "zx";
import { addDevDependency } from "./common/package-manager.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const installVitest = async (projectName: string) => {
  const dependencies = ["vitest@0.28.5", "@vitest/coverage-c8@0.28.4"];
  const dependency = await addDevDependency(dependencies);
  await $`cd ${projectName} ; ${dependency}`;
};

export const setupVitest = async (projectName: string) =>
  getTaskWrapper("Installing", "Installed", "Vitest", async () => {
    await installVitest(projectName);
    updatePackageJsonScripts(projectName, {
      test: "vitest --run --reporter=verbose",
      "test:watch": "vitest",
      coverage: "vitest run --coverage",
    });
  });

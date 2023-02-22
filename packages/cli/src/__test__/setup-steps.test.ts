import { describe, vi, expect, test } from "vitest";
import * as message from "../interface/messages.js";
import { setupESlint as setupESLint } from "../setup-eslint.js";
import { setupPrettier } from "../setup-prettier.js";
import { setupTypescript } from "../setup-typescript.js";
import { setupVitest } from "../setup-vitest.js";

vi.mock("../common/update-package-json-script", () => ({
  updatePackageJsonScripts: vi.fn(),
  devDependencies: [],
  dependencies: [],
}));

vi.mock("../setup-vite-react.js");

vi.mock("zx", () => ({
  fs: {
    writeJSONSync: vi.fn(),
    createFileSync: vi.fn(),
    appendFileSync: vi.fn(),
  },
}));

vi.mock("../common/paths", () => ({
  getProjectPath: vi.fn(),
}));

vi.mock("../interface/messages.js");
vi.mock("../common/generate-eslintrc.js");

describe.only("Test Setup", () => {
  test.each([
    ["Prettier", setupPrettier],
    ["Typescript", setupTypescript],
    ["Vitest", setupVitest],
    ["ESLint", setupESLint],
  ])(
    "should generate a warning message for %s",
    (result: string, fn: (projectName: string) => void) => {
      const projectName = "test";
      const spyMessage = vi.spyOn(message, "getWarningMessage");
      fn(projectName);
      expect(spyMessage).toHaveBeenCalledOnce();
      expect(spyMessage).toHaveBeenCalledWith("To be install", result);
    }
  );
});

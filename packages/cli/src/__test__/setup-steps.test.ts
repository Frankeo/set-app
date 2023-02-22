import { describe, vi, expect, test } from "vitest";
import { ExampleOptions } from "../common/types.js";
import * as message from "../interface/messages.js";
import { setupESlint as setupESLint } from "../setup-eslint.js";
import { setupPrettier } from "../setup-prettier.js";
import { setupReact } from "../setup-react.js";
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
  test("should generate a warning message for Vitest", () => {
    const projectName = "test";
    const spyMessage = vi.spyOn(message, "getWarningMessage");
    setupVitest(projectName);
    expect(spyMessage).toHaveBeenCalledOnce();
    expect(spyMessage).toHaveBeenCalledWith("To be install", "Vitest");
  });

  test.each([
    ["Prettier", setupPrettier],
    ["Typescript", setupTypescript],
    ["ESLint", setupESLint],
    ["React", setupReact],
  ])(
    "should generate a warning message for %s",
    (
      result: string,
      fn: (projectName: string, type: ExampleOptions) => void
    ) => {
      const projectName = "test";
      const spyMessage = vi.spyOn(message, "getWarningMessage");
      fn(projectName, ExampleOptions.REACT);
      expect(spyMessage).toHaveBeenCalledOnce();
      expect(spyMessage).toHaveBeenCalledWith("To be install", result);
    }
  );
});

import { describe, it, vi, expect } from "vitest";
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
  it.each([
    [setupPrettier, "Prettier"],
    [setupTypescript, "Typescript"],
    [setupVitest, "Vitest"],
    [setupESLint, "ESLint"],
    [setupReact, "React"],
  ])(
    "should generate a warning message",
    (
      fn: (projectName: string, type: ExampleOptions) => void,
      result: string
    ) => {
      const projectName = "test";
      const spyMessage = vi.spyOn(message, "getWarningMessage");
      fn(projectName, ExampleOptions.REACT);
      expect(spyMessage).toHaveBeenCalledOnce();
      expect(spyMessage).toHaveBeenCalledWith("To be install", result);
    }
  );
});

import { describe, vi, expect, test } from "vitest";
import { ExampleOptions } from "../common/types.js";
import * as wrapper from "../interface/task-wrapper";
import { setupESLint } from "../setup-eslint.js";
import { setupPrettier } from "../setup-prettier.js";
import { setupReact } from "../setup-react.js";
import { setupRedux } from "../setup-redux.js";
import { setupTypescript } from "../setup-typescript.js";
import { setupVitest } from "../setup-vitest.js";

describe("Test Setup", () => {
  test.each([
    ["Prettier", setupPrettier],
    ["Typescript", setupTypescript],
    ["ESLint", setupESLint],
    ["Vitest", setupVitest],
    ["React", setupReact],
    ["Redux", setupRedux],
  ])(
    "should call getTaskWrapper for %s",
    (
      result: string,
      fn: (projectName: string, type: ExampleOptions) => void
    ) => {
      const projectName = "test";
      const spyMessage = vi.spyOn(wrapper, "getTaskWrapper");
      fn(projectName, ExampleOptions.REDUX);
      expect(spyMessage).toHaveBeenCalledOnce();
      expect(spyMessage).toHaveBeenCalledWith(
        "Installing",
        "Installed",
        result,
        expect.anything()
      );
    }
  );
});

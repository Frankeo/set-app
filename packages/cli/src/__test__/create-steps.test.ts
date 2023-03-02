import { describe, expect, test, vi } from "vitest";
import { createPackageJson } from "../create-package-json.js";
import { createReadme } from "../create-readme.js";
import * as wrapper from "../interface/task-wrapper";

vi.mock("zx", async () => {
  const actual: any = await vi.importActual("zx");
  return {
    ...actual,
    $: vi.fn(),
  };
});

describe("Test create", () => {
  test.each([
    ["README.md", createReadme],
    ["package.json", createPackageJson],
  ])(
    "should call getTaskWrapper for %s",
    (
      result: string,
      fn: (projectName: string, description: string) => void
    ) => {
      const spyMessage = vi.spyOn(wrapper, "getTaskWrapper");
      fn("folder", "description");
      expect(spyMessage).toHaveBeenCalledOnce();
      expect(spyMessage).toHaveBeenCalledWith(
        "Creating",
        "Created",
        result,
        expect.anything()
      );
    }
  );
});

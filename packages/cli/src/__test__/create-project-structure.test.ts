import { describe, expect, test, vi } from "vitest";
import {
  createProjectErrorMessage,
  createProjectStructure,
} from "../create-project-structure";

import * as fs from "fs";
import * as message from "../interface/messages.js";

vi.mock("../common/paths", () => ({
  getProjectPath: (name: string) => name,
  getSrcPath: (name: string) => name,
}));

vi.mock("fs");
vi.mock("../interface/messages.js");

describe("testing project structure", () => {
  const folder = "TEST";

  test("should throw an exception when the project already exists", () => {
    vi.mocked(fs.existsSync).mockReturnValueOnce(true);
    expect(() => createProjectStructure(folder)).toThrowError(
      createProjectErrorMessage(folder)
    );
  });

  test("should create folders and print message if is a new project", () => {
    vi.mocked(fs.existsSync).mockReturnValueOnce(false);
    const spyMkdir = vi.spyOn(fs, "mkdirSync");
    const spyMessage = vi.spyOn(message, "getSuccessMessage");
    createProjectStructure(folder);
    expect(spyMkdir).toHaveBeenCalledTimes(2);
    expect(spyMessage).toHaveBeenCalledTimes(2);
  });
});

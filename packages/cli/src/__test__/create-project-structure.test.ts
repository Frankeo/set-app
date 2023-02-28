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
  const github = false;
  const description = "Random";

  test("should throw an exception when the project already exists", async () => {
    vi.mocked(fs.existsSync).mockReturnValueOnce(true);
    await expect(
      createProjectStructure(folder, github, description)
    ).rejects.toThrowError(createProjectErrorMessage(folder));
  });

  test("should create folders and print message if is a new project", async () => {
    vi.mocked(fs.existsSync).mockReturnValueOnce(false);
    const spyMkdir = vi.spyOn(fs, "mkdirSync");
    const spyMessage = vi.spyOn(message, "getSuccessMessage");
    await createProjectStructure(folder, github, description);
    expect(spyMkdir).toHaveBeenCalledTimes(2);
    expect(spyMessage).toHaveBeenCalledTimes(2);
  });
});

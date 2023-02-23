import { describe, expect, test, vi } from "vitest";
import * as message from "../interface/messages.js";
import { setupGit } from "../setup-git.js";

vi.mock("zx", () => ({
  $: vi.fn(),
  fs: {
    createFileSync: vi.fn(),
    appendFileSync: vi.fn(),
  },
}));
vi.mock("../interface/messages.js");
vi.mock("../common/paths.js", () => ({
  getProjectPath: vi.fn(),
}));

describe("Test setupGit function", () => {
  test("should generate a success message after git initialize", async () => {
    const folder = "test";
    const spyMessage = vi.spyOn(message, "getSuccessMessage");
    await setupGit(folder);
    expect(spyMessage).toHaveBeenCalledOnce();
    expect(spyMessage).toHaveBeenCalledWith("installed", "Git");
  });
});

import { describe, expect, test, vi } from "vitest";
import { createGithubRepo } from "../create-github-repo";
import * as message from "../interface/messages.js";

vi.mock("zx", () => ({
  $: vi.fn(),
}));

vi.mock("../interface/messages.js");

describe("Testing createGithubRepo", () => {
  test("should call getSuccessMessage after repo created", async () => {
    const name = "NAME";
    const spySuccessMessage = vi.spyOn(message, "getSuccessMessage");
    await createGithubRepo(name, "FakeDescription");
    expect(spySuccessMessage).toHaveBeenCalledOnce();
    expect(spySuccessMessage).toHaveBeenCalledWith(
      "Created",
      `${name} on Github`
    );
  });
});

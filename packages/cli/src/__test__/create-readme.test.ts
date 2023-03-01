import { describe, expect, test, vi } from "vitest";
import { createReadme } from "../create-readme.js";
import * as message from "../interface/messages.js";

vi.mock("zx", () => ({
  $: vi.fn(),
}));
vi.mock("../interface/messages.js");

describe.skip("Test createReadme function", () => {
  test("should generate a success message after readme creation", async () => {
    const folder = "test";
    const spyMessage = vi.spyOn(message, "getSuccessMessage");
    await createReadme(folder);
    expect(spyMessage).toHaveBeenCalledOnce();
    expect(spyMessage).toHaveBeenCalledWith("Created", "README.md");
  });
});

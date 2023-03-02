import { describe, expect, test, vi } from "vitest";
import { getProjectVersion } from "../common/get-project-version";

const number = "1.2.3";
vi.mock("zx", () => ({
  fs: {
    readJSONSync: vi.fn(() => ({
      version: number,
    })),
  },
}));

describe("Test getProjectVersion", () => {
  test("should return the version number from the package.json", () => {
    const result = getProjectVersion();
    expect(result).toBe(number);
  });
});

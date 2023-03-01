import { describe, expect, test, vi } from "vitest";
import { fs } from "zx";
import { updatePackageJsonScripts } from "../common/update-package-json-script";

vi.mock("../common/paths", () => ({
  getPackageJson: (name: string) => name,
}));

vi.mock("zx", () => ({
  fs: {
    writeJSONSync: vi.fn(),
    readJSONSync: vi.fn(),
  },
}));

const projectName = "name";

describe("update package.json scripts", () => {
  test("should update new scripts preserving the previous ones", () => {
    const file = {
      scripts: {
        typecheck: "tsc --noEmit",
      },
    };
    vi.mocked(fs.readJSONSync).mockReturnValueOnce(file);
    const spyWrite = vi.spyOn(fs, "writeJSONSync");
    const newCommand = {
      lint: 'eslint "src/**/*.{ts,tsx}" --quiet',
    };
    updatePackageJsonScripts(projectName, newCommand);
    const result = {
      scripts: {
        ...file.scripts,
        ...newCommand,
      },
    };
    expect(spyWrite).toHaveBeenCalledOnce();
    expect(spyWrite).toHaveBeenCalledWith(projectName, result);
  });
});

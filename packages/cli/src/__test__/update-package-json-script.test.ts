import { beforeEach, describe, expect, it, vi } from "vitest";
import { fs } from "zx";
import {
  dependencies,
  devDependencies,
  updatePackageJsonDependencies,
  updatePackageJsonScripts,
} from "../common/update-package-json-script";

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

describe("update package.json dependencies and devDependencies", () => {
  beforeEach(() => {
    dependencies.length = 0;
    devDependencies.length = 0;
  });

  it.each(["example", "@example-@example", "@example-example"])(
    "should work with name %s",
    (dependency: string) => {
      const number = "12.2.1";
      dependencies.push(`${dependency}@${number}`);
      devDependencies.push(`${dependency}@${number}`);
      vi.mocked(fs.readJSONSync).mockReturnValueOnce({});
      const spyWrite = vi.spyOn(fs, "writeJSONSync");
      updatePackageJsonDependencies(projectName);
      const result = {
        dependencies: {
          [dependency]: number,
        },
        devDependencies: {
          [dependency]: number,
        },
      };
      expect(spyWrite).toHaveBeenCalledOnce();
      expect(spyWrite).toHaveBeenCalledWith(projectName, result);
    }
  );
});

describe("update package.json scripts", () => {
  it("should update new scripts preserving the previous ones", () => {
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

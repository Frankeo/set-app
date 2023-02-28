import { expect, test, describe } from "vitest";
import { createTool } from "../../interface/program-defenitions";
import { hashElement } from "folder-hash";
import { dirName } from "../../differ-execution";
import { join } from "path";
import { getProjectPath } from "../../common/paths";
import { rimrafSync } from "rimraf";
import { PackageJSON } from "../../common/types";
import { fs } from "zx";

describe("SetApp cli tool", () => {
  test.each(["-h", "--help"])(
    "when specify %s then show help and exit",
    (arg: string) => {
      const program = createTool()
        .exitOverride()
        .configureOutput({
          writeOut(str) {
            expect(str).toMatchSnapshot();
          },
        });
      expect(() => program.parse(["node", "cli", arg])).toThrow("(outputHelp)");
    }
  );

  test.each(["REACT", "REACT-REDUX"])(
    "when specify projectName then create a default %s project with that name",
    async (type: string) => {
      const projectName = process.env[`CI_TEST_${type}`]!;
      const options = {
        folders: { exclude: [".*", "node_modules", "dist"] },
        files: {
          include: [
            "*.snap",
            "*.jsx",
            "*.ts",
            "*.tsx",
            "*.css",
            "*.html",
            ".prettierrc",
            "LICENSE",
            ".gitignore",
            "README.md",
            ".eslintrc.json",
            "tsconfig.json",
          ],
        },
      };
      const examplePath = process.env[`EXAMPLE_${type}`]!;
      const reactExamplePath = join(dirName(), examplePath);
      const reactPackage = fs.readJSONSync(
        join(dirName(), examplePath, "package.json")
      ) as PackageJSON;
      const hashExample = await hashElement(reactExamplePath, options);
      await createTool().parseAsync([
        "node",
        "cli",
        projectName,
        `-t${type.toLowerCase()}`,
        "--no-github",
      ]);
      const hashResult = await hashElement(
        getProjectPath(projectName),
        options
      );
      const resultPackage = fs.readJSONSync(
        join(getProjectPath(projectName), "package.json")
      ) as PackageJSON;
      const resultReadme = fs.readFileSync(
        join(getProjectPath(projectName), "README.md"),
        "utf-8"
      );
      console.log(resultReadme);
      rimrafSync(getProjectPath(projectName));
      expect(hashResult).toStrictEqual(hashExample);
      expect(resultPackage.dependencies).toStrictEqual(
        reactPackage.dependencies
      );
      expect(resultPackage.devDependencies).toStrictEqual(
        reactPackage.devDependencies
      );
    }
  );
});

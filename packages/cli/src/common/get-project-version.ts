import { join } from "path";
import { fs } from "zx";
import { PackageJSON } from "./types.js";
import { dirName } from "../get-dir-name.js";

export const getProjectVersion = () => {
  const packageJSON: PackageJSON = fs.readJSONSync(
    join(dirName(), "..", "package.json")
  );
  return packageJSON.version;
};

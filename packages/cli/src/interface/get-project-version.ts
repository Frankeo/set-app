import { join } from "path";
import { fs } from "zx";
import { PackageJSON } from "../common/types.js";
import { dirName } from "../index.js";

export const getProjectVersion = () => {
  const packageJSON: PackageJSON = fs.readJSONSync(
    join(dirName(), "..", "package.json")
  );
  return packageJSON.version;
};

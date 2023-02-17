import { $ } from "zx";
import { ExampleOptions } from "../common/types.js";
import { createPackageJson } from "../create-package-json.js";
import { createProjectStructure } from "../create-project-structure.js";
import { executeDependencies } from "../differ-execution.js";
import { setupESlint } from "../setup-eslint.js";
import { setupGit } from "../setup-git.js";
import { setupPrettier } from "../setup-prettier.js";
import { setupReact } from "../setup-react.js";
import { setupRedux } from "../setup-redux.js";
import { setupTypescript } from "../setup-typescript.js";
import { setupVitest } from "../setup-vitest.js";
import { getSucessProjectMsg } from "./messages.js";

export const createProjectAction = async (
  name: string,
  { type }: { type: string }
) => {
  $.verbose = false;
  const exampleType = type as ExampleOptions;
  if (type === "=" || !exampleType) throw new Error("Not supported option!");
  createProjectStructure(name);
  await createPackageJson(name);
  await setupGit(name);
  setupPrettier(name);
  setupTypescript(name);
  setupESlint(name);
  setupVitest(name);
  setupReact(name, exampleType);
  setupRedux(exampleType);
  await executeDependencies(name);
  getSucessProjectMsg("Project", name, "created!");
};

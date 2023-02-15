import { $ } from "zx";
import { Examples } from "../common/types.js";
import { createPackageJson } from "../create-package-json.js";
import { createProjectStructure } from "../create-project-structure.js";
import { executeDependencies } from "../differ-execution.js";
import { setupESlint } from "../setup-eslint.js";
import { setupGit } from "../setup-git.js";
import { setupPrettier } from "../setup-prettier.js";
import { setupReact } from "../setup-react.js";
import { setupTypescript } from "../setup-typescript.js";
import { setupVitest } from "../setup-vitest.js";
import { getSucessProjectMsg } from "./messages.js";

export const createProjectAction = async (
  name: string,
  options: { type: string }
) => {
  $.verbose = false;
  if (options.type === "=" || !(options.type as Examples))
    throw new Error("Not supported option!");
  createProjectStructure(name);
  await createPackageJson(name);
  await setupGit(name);
  setupPrettier(name);
  setupTypescript(name);
  setupESlint(name);
  setupVitest(name);
  setupReact(name);
  await executeDependencies(name);
  getSucessProjectMsg("Project", name, "created!");
};

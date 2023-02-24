import { $ } from "zx";
import { ExampleOptions } from "../common/types.js";
import { createPackageJson } from "../create-package-json.js";
import { createProjectStructure } from "../create-project-structure.js";
import { createReadme } from "../create-readme.js";
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
  { type, desc, github }: { type: string; desc: string; github: boolean }
) => {
  $.verbose = false;
  const exampleType = type as ExampleOptions;
  if (!exampleType) throw new Error("Not supported option!");
  await createProjectStructure(name, github, desc);
  await createPackageJson(name, desc);
  await setupGit(name, github);
  setupPrettier(name);
  setupTypescript(name);
  setupESlint(name);
  setupVitest(name);
  setupReact(name, exampleType);
  setupRedux(exampleType);
  await executeDependencies(name);
  await createReadme(name);
  getSucessProjectMsg("Project", name, "created!");
};

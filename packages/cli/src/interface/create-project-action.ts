import { $ } from "zx";
import { ExampleOptions } from "../common/types.js";
import { createPackageJson } from "../create-package-json.js";
import { createProjectStructure } from "../create-project-structure.js";
import { createReadme } from "../create-readme.js";
import { executeDependencies } from "../differ-execution.js";
import { setupESlint } from "../setup-eslint.js";
import { setupGit } from "../setup-git.js";
import { formatProject, setupPrettier } from "../setup-prettier.js";
import { setupReact } from "../setup-react.js";
import { setupRedux } from "../setup-redux.js";
import { setupTypescript } from "../setup-typescript.js";
import { setupVitest } from "../setup-vitest.js";
import { getSucessProjectMsg } from "./messages.js";

export const createProjectAction = async (
  name: string,
  {
    type,
    desc,
    github,
  }: { type: ExampleOptions; desc: string; github: boolean }
) => {
  $.verbose = false;
  await createProjectStructure(name, github, desc);
  await createPackageJson(name, desc);
  await setupGit(name, github);
  setupPrettier(name);
  setupTypescript(name);
  setupESlint(name);
  setupVitest(name);
  setupReact(name, type);
  setupRedux(type);
  await executeDependencies(name);
  await createReadme(name);
  await formatProject(name);
  getSucessProjectMsg("Project", name, "created!");
};

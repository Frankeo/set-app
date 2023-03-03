import { $ } from "zx";
import { ExampleOptions } from "../common/types.js";
import { createPackageJson } from "../create-package-json.js";
import { createProjectStructure } from "../create-project-structure.js";
import { createReadme } from "../create-readme.js";
import { setupCommitizen } from "../setup-commitizen.js";
import { setupCommitLint } from "../setup-commitlint.js";
import { setupESLint } from "../setup-eslint.js";
import { setupGit } from "../setup-git.js";
import { setupHusky } from "../setup-husky.js";
import { formatProject, setupPrettier } from "../setup-prettier.js";
import { setupReact } from "../setup-react.js";
import { setupRedux } from "../setup-redux.js";
import { setupTypescript } from "../setup-typescript.js";
import { setupVitest } from "../setup-vitest.js";
import { getSucessProjectMsg } from "./messages.js";

const removeBadSustitution = (str: string) =>
  str.replace(new RegExp(/\$'[^']*'/, "g"), (value) =>
    value.replace(new RegExp(/(\$')|(')/, "g"), "")
  );

export const createProjectAction = async (
  name: string,
  {
    type,
    desc,
    github,
  }: { type: ExampleOptions; desc: string; github: boolean }
) => {
  $.verbose = false;
  $.quote = removeBadSustitution;
  await createProjectStructure(name, github, desc);
  await createPackageJson(name, desc);
  await setupGit(name, github);
  await setupPrettier(name);
  await setupTypescript(name);
  await setupESLint(name);
  await setupVitest(name);
  await setupReact(name, type);
  await setupRedux(name, type);
  await setupHusky(name);
  await setupCommitLint(name);
  await setupCommitizen(name);
  await createReadme(name);
  await formatProject(name);
  getSucessProjectMsg("Project", name, "created!");
};

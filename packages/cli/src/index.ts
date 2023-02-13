#!/usr/bin/env node

import { createPackageJson } from "./create-package-json.js";
import { createProjectStructure } from "./create-project-structure.js";
import { setupESlint } from "./setup-eslint.js";
import { setupGit } from "./setup-git.js";
import { setupPrettier } from "./setup-prettier.js";
import { setupReact } from "./setup-react.js";
import { setupTypescript } from "./setup-typescript.js";
import { config } from "dotenv";
import { setupVitest } from "./setup-vitest.js";
import { argv, question } from "zx";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { getProdEnv } from "./common/paths.js";
import { getProjectName } from "./api/name-parameter.js";

// Don't move from this file, needs to take the reference
export const dirName = () => dirname(fileURLToPath(import.meta.url));

config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : getProdEnv(),
});

try {
  const name = await getProjectName();
  createProjectStructure(name);
  await createPackageJson(name);
  await setupGit(name);
  setupPrettier(name);
  setupTypescript(name);
  setupESlint(name);
  setupVitest(name);
  await setupReact(name);
  console.log(`Project ${name} created!`);
} catch (error) {
  console.error(error);
}

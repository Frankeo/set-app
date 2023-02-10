#!/usr/bin/env node

import { createPackageJson } from "./create-package-json.js";
import { createProjectStructure } from "./create-project-structure.js";
import { setupESlint } from "./setup-eslint.js";
import { setupGit } from "./setup-git.js";
import { setupPrettier } from "./setup-prettier.js";
import { setupReact } from "./setup-react.js";
import { setupTypescript } from "./setup-typescript.js";
import { setupViteForReact } from "./setup-vite-react.js";

const name = "Prueba";
createProjectStructure(name);
await createPackageJson(name);
await setupGit(name);
await setupPrettier(name);
await setupTypescript(name);
await setupESlint(name);
await setupViteForReact(name);
await setupReact(name);
console.log(`Project ${name} created!`);

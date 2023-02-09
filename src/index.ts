#!/usr/bin/env node

import { createPackageJson } from "./create-package-json.js";
import { createProjectStructure } from "./create-project-structure.js";
import { setupESlint } from "./setup-eslint.js";
import { setupGit } from "./setup-git.js";
import { setupOnlyJSX } from "./setup-only-jsx.js";
import { setupPrettier } from "./setup-prettier.js";
import { setupReact } from "./setup-react.js";
import { setupVite } from "./setup-vite.js";

const name = "Prueba";
const isTypescriptProject = false;
createProjectStructure(name);
await createPackageJson(name);
await setupPrettier(name);
await setupESlint(name);
await setupGit(name);
await setupVite(name);
await setupReact(name);
if (!isTypescriptProject) setupOnlyJSX(name);
console.log(`Project ${name} created!`);

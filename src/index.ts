#!/usr/bin/env node
import { createPackageJson } from "./create-package-json.js";
import { createProjectStructure } from "./create-project-structure.js";

const name = "Prueba";
const projectDirectory = createProjectStructure(name);
await createPackageJson(projectDirectory);
console.log(`Project ${name} created!`);

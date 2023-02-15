#!/usr/bin/env node

import { config } from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { getProdEnv } from "./common/paths.js";
import { createTool } from "./interface/program-defenitions.js";

// Don't move from this file, needs to take the reference
export const dirName = () => dirname(fileURLToPath(import.meta.url));

config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : getProdEnv(),
});

try {
  await createTool().parseAsync();
} catch (error) {
  console.error(error);
}

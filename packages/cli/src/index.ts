#!/usr/bin/env node

import { config } from "dotenv";
import { echo } from "zx";
import { getProdEnv } from "./common/paths.js";
import { getErrorMessage } from "./interface/messages.js";
import { createTool } from "./interface/program-defenitions.js";

config({
  path: getProdEnv(),
});

try {
  await createTool().parseAsync();
} catch (error) {
  const { message } = error as Error;
  echo(getErrorMessage(message));
}

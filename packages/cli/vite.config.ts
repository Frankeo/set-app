import { defineConfig } from "vitest/config";
import { config } from "dotenv";

config({
  path: ".env.development",
});

const isIntegration = process.env["IS_INTEGRATION"];

export default defineConfig(
  !isIntegration
    ? {
        root: "src",
        test: {
          coverage: {
            reporter: ["json-summary", "json", "text"],
            all: true,
            lines: 55,
            branches: 55,
            functions: 45,
            statements: 55,
          },
        },
      }
    : {
        root: "src/__test__/integration",
        test: {
          testTimeout: 240000,
          include: ["*.i-test.ts"],
        },
      }
);

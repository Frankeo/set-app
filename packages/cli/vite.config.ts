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
            lines: 53,
            branches: 55,
            functions: 44,
            statements: 53,
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

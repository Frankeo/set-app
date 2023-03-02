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
            lines: 60,
            branches: 60,
            functions: 48,
            statements: 60,
          },
        },
      }
    : {
        root: "src/__test__/integration",
        test: {
          testTimeout: 180000,
          include: ["*.i-test.ts"],
        },
      }
);

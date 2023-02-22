import { defineConfig } from "vitest/config";

export default defineConfig({
  root: "src",
  test: {
    coverage: {
      reporter: ["json-summary", "json"],
      all: true,
      lines: 60,
      branches: 60,
      functions: 60,
      statements: 60,
    },
  },
});

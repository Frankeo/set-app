import { defineConfig } from "vitest/config";

export default defineConfig({
  root: "src",
  test: {
    coverage: {
      reporter: ["cobertura"],
      all: true,
    },
  },
});

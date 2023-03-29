import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  root: "src",
  build: {
    outDir: "../dist",
  },
  test: {
    environment: "happy-dom",
    coverage: {
      reporter: ["html"],
      all: true,
    },
    setupFiles: ["./setupVitest.ts"],
  },
});

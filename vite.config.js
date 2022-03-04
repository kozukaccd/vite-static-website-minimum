import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  server: {
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
    open: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: "../dist",
  },
});

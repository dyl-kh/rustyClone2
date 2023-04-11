import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  base: process.env.NODE_ENV === "production" ? "/rustyClone2/" : "/",
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});

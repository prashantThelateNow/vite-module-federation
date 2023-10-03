import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote2",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./VueApp": "./src/main.ts",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
  },
});

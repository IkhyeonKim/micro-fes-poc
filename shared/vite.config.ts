import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

import { NativeFederationTypeScriptRemote } from "@module-federation/native-federation-typescript/vite";

const moduleFederationConfig = {
  name: "shared_library",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button",
  },
  shared: {
    react: { singleton: true, eager: true },
    "react-dom": { singleton: true, eager: true },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   name: "shared_library",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./Button": "./src/components/Button",
    //     "./ButtonProps": "./src/types/button.ts",
    //   },
    //   shared: ["react", "react-dom"],
    // }),
    NativeFederationTypeScriptRemote({ moduleFederationConfig }),
  ],
  server: {
    // proxy: {
    //   "/@mf-types.zip": {
    //     target: "http://127.0.0.1:5002",
    //     changeOrigin: true,
    //     rewrite: () => `/@fs/${process.cwd()}/dist/@mf-types.zip`,
    //   },
    // },
    fs: {
      allow: ["./dist"],
    },
  },
  build: {
    modulePreload: false, // This is required
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

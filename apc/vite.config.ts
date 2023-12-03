import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
  },
  plugins: [
    react(),
    federation({
      name: "shell-application",
      remotes: {
        remoteApp: "http://127.0.0.1:5002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false, // This is required
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

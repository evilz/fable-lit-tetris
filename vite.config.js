const { defineConfig } = require("vite");
const path = require("path");

export default {
    build: {
      //sourcemap: true,
      // use the lib options
    // otherwise it will bundle the scripts
    // with the index file as if it was a webapp
    lib: {
      entry: path.resolve(__dirname, "src/Main.js"),
      name: "evilz-tetris",
      fileName: (format) => `evilz-tetris.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      treeshake: true,
    },
    },
  }
// esbuild.config.js
const path = require("path");
const { build } = require("esbuild");
const postcssPlugin = require("esbuild-plugin-postcss");

build({
  entryPoints: ["src/index.js"],
  bundle: true,
  outfile: "dist/bundle.js",
    plugins: [postcssPlugin({
    // postcss options go here
  })],
  loader: {
    ".jpg": "file", // Add file-loader for .jpg files
  },
  platform: "browser",
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  sourcemap: true,
}).catch(() => process.exit(1));

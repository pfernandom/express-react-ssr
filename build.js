const { sassPlugin } = require("esbuild-sass-plugin");
const esbuild = require("esbuild");

esbuild
  .build({
    logLevel: "info",
    entryPoints: ["src/index.jsx", "src/index.scss"],
    bundle: true,
    outdir: "public/",
    plugins: [sassPlugin()],
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    logLevel: "info",
    entryPoints: ["src/server/server.js"],
    bundle: true,
    platform: "node",
    outfile: "dist/index.js",
  })
  .catch(() => process.exit(1));

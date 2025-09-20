import { build } from "esbuild";

await build({
  entryPoints: ["app.js"],
  bundle: true,
  platform: "node",
  target: "esnext",
  format: "esm",
  outfile: "dist/app.js",
  minify: true, // optional
  sourcemap: true // optional
});

console.log("✅ Bundling selesai");

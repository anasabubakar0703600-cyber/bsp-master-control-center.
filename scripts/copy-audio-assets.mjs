import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = process.cwd();
const source = join(root, "node_modules", "@sapphi-red", "web-noise-suppressor", "dist");
const files = [
  ["rnnoise", "workletProcessor.js", "rnnoiseWorklet.js"],
  ["rnnoise", "rnnoise.wasm", "rnnoise.wasm"],
  ["rnnoise", "rnnoise_simd.wasm", "rnnoise_simd.wasm"],
];
await mkdir(join(root, "public", "audio"), { recursive: true });
for (const [folder, from, to] of files) {
  const src = join(source, folder, from);
  const dest = join(root, "public", "audio", to);
  await mkdir(dirname(dest), { recursive: true });
  await copyFile(src, dest);
}
console.log("RNNoise browser assets copied.");

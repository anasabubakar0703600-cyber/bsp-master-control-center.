import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "node_modules", "@sapphi-red", "web-noise-suppressor", "dist");
const destination = join(root, "public", "audio");
await mkdir(destination, { recursive: true });

const files = [
  [join(dist, "rnnoise", "workletProcessor.js"), join(destination, "rnnoiseWorklet.js")],
  [join(dist, "rnnoise.wasm"), join(destination, "rnnoise.wasm")],
  [join(dist, "rnnoise_simd.wasm"), join(destination, "rnnoise_simd.wasm")],
];

for (const [source, target] of files) {
  await copyFile(source, target);
}
console.log("RNNoise browser assets copied.");

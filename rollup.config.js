import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";

export default {
  input: "src/components/index.ts",
  output: {
    preserveModules: true,
    dir: "./dist",
    format: "es",
  },
  external: /^lit/,
  plugins: [typescript(), del({ targets: "dist/*" })],
};

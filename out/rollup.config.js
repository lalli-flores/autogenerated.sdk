import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: "dist/index.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    name: "webexApis"
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    json()
  ]
}

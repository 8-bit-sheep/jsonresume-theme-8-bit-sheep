import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  target: 'node16',
  treeshake: true,
  minify: true,
});

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  target: 'node16',
  minify: true,
  outDir: '.',
});

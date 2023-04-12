import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    exclude: [...configDefaults.exclude],
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    coverage: {
      all: true,
      enabled: true,
      exclude: [
        ...configDefaults.exclude,
        '**/*.test.*',
        '**/*/coverage',
        '**/*/client.tsx',
      ],
      provider: 'c8',
    },
  },
});

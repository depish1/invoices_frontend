import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'Assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'Components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'Enums', replacement: path.resolve(__dirname, 'src/enums') },
      { find: 'Layouts', replacement: path.resolve(__dirname, 'src/layouts') },
      { find: 'Pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'Styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'Types', replacement: path.resolve(__dirname, 'src/types') },
      { find: 'Languages', replacement: path.resolve(__dirname, 'src/languages') },
      { find: 'Helpers', replacement: path.resolve(__dirname, 'src/helpers') },
      { find: 'Store', replacement: path.resolve(__dirname, 'src/store') },
      { find: 'Slices', replacement: path.resolve(__dirname, 'src/store/slices') },
      { find: 'Api', replacement: path.resolve(__dirname, 'src/store/api') },
      { find: 'Selectors', replacement: path.resolve(__dirname, 'src/store/selectors') },
      { find: 'Middleware', replacement: path.resolve(__dirname, 'src/store/middleware') },
      { find: 'Hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: 'Contexts', replacement: path.resolve(__dirname, 'src/contexts') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});

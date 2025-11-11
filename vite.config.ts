import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import path from 'path';
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Required for path aliases to be recognized in build
    alias: {
      '@lib': path.resolve(__dirname, './lib'),
      '@components': path.resolve(__dirname, './lib/components'),
      '@theme': path.resolve(__dirname, './lib/theme'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'), // Library entry point
      name: 'AM-MUI',
      // the proper extensions will be added
      fileName: 'am-mui-lib',
      formats: ['es', 'umd'], // Build formats
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  }
})

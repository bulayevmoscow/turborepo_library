import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import { splitVendorChunkPlugin } from 'vite'
import tsConfigPaths from "vite-tsconfig-paths";

import a from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: "@emotion/react",
    babel: {
      plugins: ["@emotion/babel-plugin"],
    },
  }),tsConfigPaths(), dts({
    include: ['src'],
  }), splitVendorChunkPlugin()],
  build: {
    outDir: '$INIT_CWD/../../../core',
    
    lib: {
      entry: resolve(__dirname, 'src/icons/uk.tsx'),
      name: 'ReactViteLibrary',
      formats: ['es'],
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(a.peerDependencies)],
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }

})

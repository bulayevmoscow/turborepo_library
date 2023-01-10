import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    include: ['src'],
  }), splitVendorChunkPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/icons/uk.tsx'),
      name: 'ReactViteLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `ui.${format}.js`,
    },
    // rollupOptions: {
    //   external: [...Object.keys(packageJson.peerDependencies)],
    // },
  },

})

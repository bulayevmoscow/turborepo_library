var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { splitVendorChunkPlugin } from 'vite';
import tsConfigPaths from "vite-tsconfig-paths";
import a from "./package.json";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsConfigPaths(), dts({
            include: ['src']
        }), splitVendorChunkPlugin()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/icons/uk.tsx'),
            name: 'ReactViteLibrary',
            formats: ['es', 'umd'],
            fileName: function (format) { return "ui.".concat(format, ".js"); }
        },
        rollupOptions: {
            external: __spreadArray([], Object.keys(a.peerDependencies), true)
        }
    }
});

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'pinia'],
      resolvers: [ElementPlusResolver()],
      dts: 'types/auto-imports.d.ts',
      include: ['src/**/*.vue', 'tests/**/*.vue'],
      // 输出类型的位置
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components'],
      extensions: ['vue', 'ts'],
      deep: true,
      dts: 'types/components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

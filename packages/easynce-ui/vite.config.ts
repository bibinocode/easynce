import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createVuePlugin} from 'vite-plugin-vue2'
import { resolve } from 'path'
import {isVue2} from 'vue-demi'



const outDirName = isVue2 ? 'dist/vue2' : 'dist/vue3'

export default defineConfig({
  plugins: [isVue2 ? createVuePlugin() : vue()],
    build: {
        outDir:outDirName,
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: "easynce",
            fileName:"easynce"
      }
  }
})

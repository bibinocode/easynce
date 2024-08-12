import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import {isVue2} from 'vue-demi'



const outDirName = isVue2 ? 'dist/vue2' : 'dist/vue3'

export default defineConfig({
  plugins: [vue()],
    build: {
        outDir:outDirName,
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: "easynce",
            fileName:"easynce"
        },
        rollupOptions: {
            external: ['vue', 'vue-demi'],
            output: {
                globals: { // umd 模式下的全局变量别名
                    vue: "Vue",
                    "vue-demi":"VueDemi"
               }
            }
        }
    },

})

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// elment-plus  按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            }
        },
        plugins: [
            vue(),
            AutoImport({
                // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
                imports: ["vue"],
                resolvers: [],
            }),
            Components({
                resolvers: []
            })
        ],
    }
})

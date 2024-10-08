import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// elment-plus  按需导入
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// icon 插件
import Icons from 'unplugin-icons/vite'
// icons 按需导入
import IconsResolver from 'unplugin-icons/resolver'
// 自定义 svg
import {FileSystemIconLoader} from 'unplugin-icons/loaders'
 // 导入UnoCSS
import UnoCSS from 'unocss/vite'


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnable: true,
                    additionalData: `@use "@/assets/style/variable.scss" as *;`
                }
            }
        },
        plugins: [
            vue(),
            AutoImport({
                // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
                imports: ["vue"],
                resolvers: [
                    // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
                    ElementPlusResolver(),
                    // 自动导入图标组件
                    IconsResolver({}),
                ],
            }),
            Components({
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        // https://icon-sets.iconify.design/
                        prefix: "icon",
                        customCollections: ["base"],
                    }),
                ]
            }),
            Icons({
                compiler: "vue3",
                // 自动安装图标库
                autoInstall: true,
                customCollections: {
                    "base": FileSystemIconLoader("src/assets/icons/base")
                }
            }),
            UnoCSS({}),
        ],
    }
})

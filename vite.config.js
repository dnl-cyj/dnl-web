import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const src = path.resolve(__dirname, "src")
console.log("src",src)

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            }
        },
        plugins: [vue()],
    }
})

import axios, { AxiosRequestConfig, AxiosResponse} from "axios";

// 创建 axios 实例
const service  = axios.create({
    baseURL: import.meta.env.VUE_APP_BASE_URL,
    timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(config => {

})

// 拦截器
service.interceptors.response.use(response => {

})

export default service ;
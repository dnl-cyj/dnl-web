import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import staticRouters from "@/routers/modules/staticRouters.js";

/**
 * 穿件路由
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRouters,
})

export default router;
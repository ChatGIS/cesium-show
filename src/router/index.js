import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { name: 'TerrainShow', path: '/terrain-show', component: () => import('@/views/TerrainShow.vue') },
  { name: 'CameraParam', path: '/camera-param', component: () => import('@/views/CameraParam.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
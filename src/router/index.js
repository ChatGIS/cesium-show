import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { name: 'Home', path: '/', component: () => import('@/views/home/Index.vue') },
  { name: 'GaodeOnlineTile', path: '/gaode-online-tile', component: () => import('@/views/TerrainShow.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
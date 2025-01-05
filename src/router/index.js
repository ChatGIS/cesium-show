import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { name: 'Test', path: '/', component: () => import('@/views/test.vue') },
  { name: 'TerrainShow', path: '/terrain-show', component: () => import('@/views/TerrainShow.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { name: 'TerrainShow', path: '/terrain-show', component: () => import('@/views/TerrainShow.vue') },
  { name: 'CameraParam', path: '/camera-param', component: () => import('@/views/CameraParam.vue') },
  { name: 'CustomMaterial', path: '/custom-material', component: () => import('@/views/CustomMaterial.vue') },
  // { name: 'CircleWave', path: '/circle-wave', component: () => import('@/views/CircleWave.vue') },
  { name: 'CircleWaveDemo', path: '/circle-wave-demo', component: () => import('@/views/CircleWaveDemo.vue') },
  // { name: 'HexagonSpread', path: '/hexagon-spread', component: () => import('@/views/HexagonSpread.vue') },
  { name: 'HexagonSpreadDemo', path: '/hexagon-spread-demo', component: () => import('@/views/HexagonSpreadDemo.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
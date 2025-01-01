import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { name: 'Home', path: '/', component: () => import('@/views/home/Index.vue') },
  { name: 'GaodeOnlineTile', path: '/gaode-online-tile', component: () => import('@/views/openlayers/GaodeOnlineTile.vue') },
  { name: 'DataType', path: '/data-type', component: () => import('@/views/openlayers/DataType.vue') },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router
import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    name: "TerrainShow",
    path: "/terrain-show",
    component: () => import("@/views/TerrainShow.vue"),
  },
  {
    name: "CameraParam",
    path: "/camera-param",
    component: () => import("@/views/CameraParam.vue"),
  },
  {
    name: "CustomMaterial",
    path: "/custom-material",
    component: () => import("@/views/CustomMaterial.vue"),
  },
  // { name: 'CircleWave', path: '/circle-wave', component: () => import('@/views/CircleWave.vue') },
  {
    name: "CircleWaveDemo",
    path: "/circle-wave-demo",
    component: () => import("@/views/CircleWaveDemo.vue"),
  },
  // { name: 'HexagonSpread', path: '/hexagon-spread', component: () => import('@/views/HexagonSpread.vue') },
  {
    name: "HexagonSpreadDemo",
    path: "/hexagon-spread-demo",
    component: () => import("@/views/HexagonSpreadDemo.vue"),
  },
  // { name: 'Scanline', path: '/scanline', component: () => import('@/views/Scanline.vue') },
  {
    name: "ScanlineDemo",
    path: "/scanline-demo",
    component: () => import("@/views/ScanlineDemo.vue"),
  },
  // { name: 'PolylineTrail', path: '/polyline-trail', component: () => import('@/views/PolylineTrail.vue') },
  {
    name: "PolylineTrailDemo",
    path: "/polyline-trail-demo",
    component: () => import("@/views/PolylineTrailDemo.vue"),
  },
  // { name: 'DynamicWall', path: '/dynamic-wall', component: () => import('@/views/DynamicWall.vue') },
  {
    name: "DynamicWallDemo",
    path: "/dynamic-wall-demo",
    component: () => import("@/views/DynamicWallDemo.vue"),
  },
  // { name: '3DTilesetShow', path: '/3dtileset-show', component: () => import('@/views/3DTilesetShow.vue') },
  {
    name: "3DTilesetShowDemo",
    path: "/3dtileset-show-demo",
    component: () => import("@/views/3DTilesetShowDemo.vue"),
  },
  {
    name: "ParticleFirework",
    path: "/particle-firework",
    component: () => import("@/views/ParticleFirework.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;

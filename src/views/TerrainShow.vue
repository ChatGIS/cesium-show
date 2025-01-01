
<template>
  <div id="cesiumContainer"></div>
  <SideNav/>
</template>
<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
import SideNav from '@/components/SideNav.vue';

Cesium.Ion.defaultAccessToken=import.meta.env.VITE_TOKEN_CESIUM
onMounted(async () => {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    baseLayerPicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    // terrainProvider: new Cesium.EllipsoidTerrainProvider({})
    // terrainProvider: Cesium.Terrain.fromWorldTerrain(),
    terrainProvider: await Cesium.createWorldTerrainAsync({
      // requestWaterMask: true,
      requestVertexNormals: true
    })  // Cesium可用
    // terrainProvider: await Cesium.CesiumTerrainProvider.fromUrl('/terrain/')  // 本地数据加载
    // terrainProvider: await Cesium.CesiumTerrainProvider.fromUrl('http://www.freexgis.com/web-data/terrain')
    // terrainProvider: await Cesium.CesiumTerrainProvider.fromUrl('https://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path')
    // terrainProvider: await Cesium.ArcGISTiledElevationTerrainProvider.fromUrl('https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer')
  })


  viewer.scene.debugShowFramesPerSecond = true
  // 本地地形数据范围
  /* const entityPolylineTerrain = viewer.entities.add({
    id: 'polylineTerrain',
    name: '地形数据范围',
    show: true,
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray([118.000139,35.999861, 118.000139,37.000139, 
        116.999861,37.000139, 116.999861,35.999861,118.000139,35.999861]),
      width: 2,
      material: Cesium.Color.BLUE,
      clampToGround: true,  // 贴地
    }
  }) */
  // viewer.zoomTo(entityPolylineTerrain)
  // Huashan
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(117.063045, 36.715607, 126),
    orientation: {
      heading: Cesium.Math.toRadians(359.68),
      pitch: Cesium.Math.toRadians(-7.68),
      roll: Cesium.Math.toRadians(0)
    }
  })
  // 泰山
  /* viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(117.151952, 36.173695, 2539),
    orientation: {
      heading: Cesium.Math.toRadians(323.40),
      pitch: Cesium.Math.toRadians(-15.72),
      roll: Cesium.Math.toRadians(0)
    }
  }) */ 
})

</script>
<style scoped>
#cesiumContainer {
    width: 100%;
    height: 100%;
}
</style>
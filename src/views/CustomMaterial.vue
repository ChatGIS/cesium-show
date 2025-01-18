
<template>
  <div id="cesiumContainer"></div>
  <SideNav/>
</template>
<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
import SideNav from '@/components/SideNav.vue';
import imgBird from '@/assets/images/other/bird.jpeg'

let viewer
Cesium.Ion.defaultAccessToken=import.meta.env.VITE_TOKEN_CESIUM
onMounted(async () => {
  viewer = new Cesium.Viewer('cesiumContainer', {
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    baseLayerPicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    terrainProvider: await Cesium.createWorldTerrainAsync({
      requestVertexNormals: true
    })  
  })
  viewer.scene.debugShowFramesPerSecond = true
  
  
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(117.066687, 36.722386, 5000),
    orientation: {
      heading: Cesium.Math.toRadians(360.00),
      pitch: Cesium.Math.toRadians(-88.34),
      roll: Cesium.Math.toRadians(0.00)
    }
  })

  addPolygon()
})
class CustomMaterial {
  constructor() {
    Cesium.Material._materialCache.addMaterial('CustomMaterial', {
      fabric: {
        type: 'CustomMaterial',
        uniforms: {
          uImg: imgBird,
          uTime: 0
        },
        source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
          czm_material material = czm_getDefaultMaterial(materialInput);
          vec2 materialUV = materialInput.st;
          vec4 imgColor = texture(uImg, vec2(materialUV.x, materialUV.y));
          // vec4 imgColor = texture(uImg, vec2(fract(materialUV.x - uTime), materialUV.y));
          material.diffuse = vec3(imgColor.rgb);
          return material;
        }
        `
      }
    })
  }
  getType() {
    return 'CustomMaterial'
  }
  getValue(time, result) {
    result.uTime = performance.now() / 1000
    return result
  }
}
let customMaterial = new CustomMaterial()
const addPolygon = () => {
  viewer.entities.add({
    rectangle: {
      coordinates: Cesium.Rectangle.fromDegrees(117.058722, 36.721109, 117.070573, 36.733506),
      material: customMaterial
    }
  })
}
</script>
<style scoped>
#cesiumContainer {
    width: 100%;
    height: 100%;
}
</style>
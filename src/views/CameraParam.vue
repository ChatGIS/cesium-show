<template>
    <div id="cesiumContainer"></div>
    <el-form id="paramContainer" :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="经度">
            <el-input v-model="params.lon" />
        </el-form-item>
        <el-form-item label="纬度">
            <el-input v-model="params.lat" />
        </el-form-item>
        <el-form-item label="高度">
            <el-input v-model="params.height" />
        </el-form-item>
        <el-form-item label="方向角">
            <el-input v-model="params.heading" />
        </el-form-item>
        <el-form-item label="俯仰角">
            <el-input v-model="params.pitch" />
        </el-form-item>
        <el-form-item label="翻滚角">
            <el-input v-model="params.roll" />
        </el-form-item>
        <el-form-item label="精简数字">
            <el-switch v-model="isSimplify" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" round @click="handleCopyCode">代码复制</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup>
import * as Cesium from 'cesium'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import useClipboard from 'vue-clipboard3'

const { toClipboard } = useClipboard()
Cesium.Ion.defaultAccessToken=import.meta.env.VITE_TOKEN_CESIUM
const params = ref({
  lon: 117.065551,
  lat: 36.676969,
  height: 5181,
  heading: 346.98,
  pitch: -37.99,
  roll: 0
})
const isSimplify = ref(true)
let viewer
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
    terrainProvider: await Cesium.createWorldTerrainAsync()
  })
  viewer.scene.debugShowFramesPerSecond = true
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(params.value.lon, params.value.lat, params.value.height),
    orientation: {
      heading: Cesium.Math.toRadians(params.value.heading),
      pitch: Cesium.Math.toRadians(params.value.pitch),
      roll: Cesium.Math.toRadians(params.value.roll)
    }
  })
  createHandler()
})
const createHandler = () => {
  // 创建事件处理器  
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
  // 处理鼠标拖动事件  
  handler.setInputAction(function () {  
  // 获取相机的当前视角参数  
    const viewParams = getCameraViewParameters()  
    
    // 输出视角参数  
    console.log(viewParams)  
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE) 
}
  
/**
 * @description: 获取相机参数
 * @return {*}
 */
const getCameraViewParameters = () => {  
  const camera = viewer.camera  

  // 获取当前位置（经纬度和高度）  
  const position = camera.positionCartographic
  const longitude =  Cesium.Math.toDegrees(position.longitude)
  const latitude = Cesium.Math.toDegrees(position.latitude)
  const height = position.height
  const heading = Cesium.Math.toDegrees(camera.heading)
  const pitch = Cesium.Math.toDegrees(camera.pitch)
  const roll = Cesium.Math.toDegrees(camera.roll)

  params.value.lon =  isSimplify.value ? longitude.toFixed(6) : longitude
  params.value.lat = isSimplify.value ? latitude.toFixed(6) : latitude
  params.value.height =  isSimplify.value ? height.toFixed() : height  
  params.value.heading = isSimplify.value ? heading.toFixed(2) : heading 
  params.value.pitch = isSimplify.value ? pitch.toFixed(2) : pitch
  params.value.roll = isSimplify.value ? roll.toFixed(2) : roll
}
/**
 * @description: 复制代码
 * @return {*}
 */
const handleCopyCode = async () => {
  try {
    const code = `
      viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(${params.value.lon}, ${params.value.lat}, ${params.value.height}),
      orientation: {
        heading: Cesium.Math.toRadians(${params.value.heading}),
        pitch: Cesium.Math.toRadians(${params.value.pitch}),
        roll: Cesium.Math.toRadians(${params.value.roll})
      }
    })
    `
    await toClipboard(code)
    ElMessage({
      message: 'ChatGIS提醒您：复制成功',
      type: 'success',
    })
  } catch (e) {
    console.error(e)
  }
}
</script>
<style scoped>
#cesiumContainer {
    width: 100%;
    height: 100%;
}
#paramContainer {
    position: absolute;
    background-color: #ffffffcf;
    padding: 30px;
    border-radius: 20px;
    top: 20px;
    left: 20px;
}
</style>
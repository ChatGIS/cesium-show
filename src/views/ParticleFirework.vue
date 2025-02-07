
<template>
    <div id="cesiumContainer"></div>
    <SideNav/>
    <FooterInfo/>
  </template>
  <script setup>
  import * as Cesium from 'cesium'
  import { onMounted } from 'vue'
  import SideNav from '@/components/SideNav.vue';
  import FooterInfo from '@/components/FooterInfo.vue'
  
  const particlePixelSize = new Cesium.Cartesian2(7.0, 7.0)
    const brustNum = 400.0
    const lifeTime = 10.0
    const numberOfFireworks = 20.0
    // 创建一个模型变换矩阵
    const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(117.060879, 36.759209, 0))
    const emitterInitialLocation = new Cesium.Cartesian3(0, 0, 1000.0)
 const xMin = -100.0
 const xMax = 100.0
 const yMin = -80.0
 const yMax = 100.0
 const zMin = -50.0
 const zMax = 50.0
 const colorOption = [{
    minimumRed: 0.75,
    green: 0.0,
    minimumBlue: 0.8,
    alpha: 1.0
 }, {
    red: 0.0,
    minimumGreen: 0.75,
    minimumBlue: 0.8,
    alpha: 1.0
 }, {
    red: 0.0,
    green: 0.75,
    minimumBlue: 0.8,
    alpha: 1.0
 }, {
    minimumRed: 0.0,
    minimumGreen: 0.75,
    blue: 0.8,
    alpha: 1.0
 }]

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
      shouldAnimate: true,
      terrainProvider: await Cesium.createWorldTerrainAsync({
        requestVertexNormals: true
      })  
    })
    viewer.scene.debugShowFramesPerSecond = true
    viewer.scene.globe.depthTestAgainstTerrain = true //遮盖，启用深度遮挡
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(117.065551, 36.676969, 5181),
      orientation: {
        heading: Cesium.Math.toRadians(346.98),
        pitch: Cesium.Math.toRadians(-37.99),
        roll: Cesium.Math.toRadians(360.00)
      }
    })

    loadFirework()
  })
  const loadFirework = () => {
    for(let i = 0; i < numberOfFireworks; i++) {
      const offset = new Cesium.Cartesian3(
        Cesium.Math.randomBetween(xMin, xMax),
        Cesium.Math.randomBetween(yMin, yMax),
        Cesium.Math.randomBetween(zMin, zMax)
      )
      const color = Cesium.Color.fromRandom(colorOption[i % colorOption.length])
      const bursts = []
      for(let j = 0; j < 3; ++j) {
        bursts.push(
            new Cesium.ParticleBurst({
                time: Cesium.Math.nextRandomNumber() * lifeTime,
                minimum: brustNum,
                maximum: brustNum,
            })
        )
      }
      createFirework(offset, color, bursts)
    }
  }
  const getImage = () => {
    const particleCanvas = document.createElement('canvas')
    particleCanvas.width = 20
    particleCanvas.height = 20
    const particleContext = particleCanvas.getContext('2d')
    particleContext.beginPath()
    particleContext.arc(10, 10, 8, 0, Cesium.Math.TWO_PI, true)
    particleContext.closePath()
    particleContext.fillStyle = 'rgba(255, 255, 255, 1)'
    particleContext.fill()
    return particleCanvas
  }
  const createFirework = (offset, color, bursts) => {
    const position = Cesium.Cartesian3.add(emitterInitialLocation, offset, new Cesium.Cartesian3())
    const emitterModelMatrix = Cesium.Matrix4.fromTranslation(position)
    viewer.scene.primitives.add(new Cesium.ParticleSystem({
      image: getImage(),
      startColor: color,
      endColor: color.withAlpha(0.0),
      particleLifeTime: 1,
      speed: 100.0,
      imageSize: particlePixelSize,
      emissionRate: 0,
      emitter: new Cesium.SphereEmitter(0.1),
      bursts: bursts,
      lifetime: lifeTime,
      modelMatrix: modelMatrix,
      emitterModelMatrix: emitterModelMatrix,
      loop: true
    }))
  }
  </script>
  <style scoped>
  #cesiumContainer {
      width: 100%;
      height: 100%;
  }
  </style>
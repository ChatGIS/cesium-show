
<template>
  <el-watermark :content="['https://chatgis.space', '@ChatGIS']">
    <el-image id="image-container" :src="ImageModule"/>
    <PageWarn/>
    <SideNav/>
    <FooterInfo/>
  </el-watermark>
</template>
<script setup>
import SideNav from '@/components/SideNav.vue'
import PageWarn from '@/components/PageWarn.vue'
import FooterInfo from '@/components/FooterInfo.vue'
import ImageModule from '@/assets/images/home/polyline-trail.gif'
</script>
<style scoped>
#image-container {
    width: 100%;
    height: 100%;
}
</style>
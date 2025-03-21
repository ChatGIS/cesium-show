import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import cesium from 'vite-plugin-cesium'
// import { viteStaticCopy } from 'vite-plugin-static-copy'

// const cesiumSource = "node_modules/cesium/Build/Cesium/";
export default defineConfig({
  base: '/cesium-show/',
  plugins: [
    vue(),
    cesium(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    /* viteStaticCopy({
      targets: [
        {
          src: [`${cesiumSource}Assets`, `${cesiumSource}ThirdParty`, 
            `${cesiumSource}Widgets`, `${cesiumSource}Workers`, `${cesiumSource}Cesium.js`],
          dest: './cesium'
        }
      ]
    }) */
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 13011
  }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

require('../node_modules/video.js/dist/video-js.css')
require('../node_modules/videojs-markers/dist/videojs.markers.css')
require('../node_modules/videojs-markers/dist/videojs-markers.js')
require('../node_modules/videojs-youtube/dist/Youtube.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

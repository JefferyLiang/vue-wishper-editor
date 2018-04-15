import Vue from 'vue'
import App from './App.vue'

import WishperEditor from './lib/index'
Vue.use(WishperEditor)

new Vue({
  el: '#app',
  render: h => h(App)
})

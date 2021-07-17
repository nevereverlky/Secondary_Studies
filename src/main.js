// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// import Vuex from 'vuex'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import qs from 'QS'

import './assets/css/style.css'
import './assets/css/skin_color.css'
import './assets/css/color_theme.css'

// Vue.use(ElementUI)
// Vue.use(VueAxios, axios)
// Vue.use(Vuex)
// Vue.prototype.$axios = axios
// Vue.prototype.$qs = qs
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  // 时间格式年月日、时分秒
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

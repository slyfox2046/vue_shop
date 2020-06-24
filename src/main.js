import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import './assets/global.css'
import './plugins/element.js'
import router from './router'

Vue.prototype.$http = axios
// 配置请求的根路径
axios.default.baseUrl = 'http://127.0.0.1:8800/api/private/v1/'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

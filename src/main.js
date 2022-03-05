import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'// 加载mockServer即可
import loading from './common/imgs/loading.gif'
import './filters' // 加载过滤器
Vue.config.productionTip = false
//注册全局组件标签
Vue.component(Button.name,Button)
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

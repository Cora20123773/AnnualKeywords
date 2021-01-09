import Vue from 'vue'
import App from './App'
import VDragged from 'v-dragged'

Vue.config.productionTip = false
Vue.use(VDragged) // 拖拽元素组件

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

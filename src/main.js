import {
  createApp
} from 'vue'
import {
  createRouter
} from '@/router'

/* swiper */
// import 'swiper/swiper.min.css'

/* 重置样式 */
import './assets/css/reset.min.css'

// import 'jquery'

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'
import VueAwesomeSwiper from 'vue-awesome-swiper';

/* animate.css */
import 'wow.js/css/libs/animate.css'

import App from './App.vue'

const router = createRouter()
const app = createApp(App)
import mitt from 'mitt'
const bus = mitt()
app.config.globalProperties.$bus = bus

// 全局通用工具
import * as utilTool from '@/utils/utils'

app.config.globalProperties.$tool = utilTool

app.use(VueAwesomeSwiper).use(router).mount('#app')

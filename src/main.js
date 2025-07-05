import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 采用fullPage.js
import 'vue-fullpage.js/dist/style.css'
import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
  .use(store)
  .use(router)
  .use(VueFullPage)
  .mount('#app')

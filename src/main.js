import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入通用的样式
import './styles/base.less'
import './styles/iconfont.css'
// 导入vant
import Vant from 'vant'
// import { Button } from 'vant'
import 'vant/lib/index.css'
// 配置项目的rem
import 'amfe-flexible'
// 引入头部组件
import NewsHeader from './components/NewsHeader.vue'
// 引入logo组件
import NewsLogo from './components/NewsLogo.vue'
// 全局注册头部组件
Vue.component('news-header', NewsHeader)
// 全局注册logo组件
Vue.component('news-logo', NewsLogo)

// 全局的把vant的所有组件都导入好了
Vue.use(Vant)
// Vue.use(Button)
// import Button from 'vant/lib/button'
// import 'vant/lib/button/style'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

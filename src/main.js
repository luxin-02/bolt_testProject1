import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css'
import setupDirectives from './directives'
import { registerUIComponents } from './components/ui'
import { registerAuthComponents } from './components/auth'

Vue.config.productionTip = false

setupDirectives(Vue)
registerUIComponents(Vue)
registerAuthComponents(Vue)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

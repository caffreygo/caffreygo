import Vue from 'vue'
import router from './router'
import store from './store'
import './plugins/axios'
import ELEMENT from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import 'babel-polyfill'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'

Vue.use(ELEMENT)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')

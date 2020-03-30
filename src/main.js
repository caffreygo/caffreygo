import Vue from 'vue'
import router from './router'
import store from './store'
import './plugins/axios'
import ELEMENT from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import i18n from './plugins/i18n'

Vue.use(ELEMENT);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/style/helpers.styl'
import '@/style/transitions.styl'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueTheMask)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import xuanran from './xuanran.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(xuanran),
}).$mount('#counter')

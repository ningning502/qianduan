import Vue from 'vue'
import Item from './Item.vue'
import xuanran from './xuanran.vue'

Vue.config.productionTip = false



new Vue({
  render: h => h(xuanran),
}).$mount('#app')

new Vue({
  render: h => h(Item),
}).$mount('#app1')
import Vue from 'vue'
import App from './App.vue'
import VueJedi from './components/index.js'

Vue.use(VueJedi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

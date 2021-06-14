import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.dispatch('setCategory', to.query.category || '')
  store.dispatch('setManugacturer', to.query.manufacturer || '')
  next()
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'

import App from './App'
import router from './router'
import store from './store'
import settingsStore from './store/modules/settings'

Vue.use(Vuetify, {
  theme: settingsStore.state.theme.colors
})
Vue.use(VueScrollTo)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

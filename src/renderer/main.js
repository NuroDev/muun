import Vue from 'vue'
import VueElectron from 'vue-electron'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'

import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n'
import settingsStore from './store/modules/settings'

Vue.use(VueElectron)
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
  i18n,
  template: '<App/>'
}).$mount('#app')

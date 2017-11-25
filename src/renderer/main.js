import Vue from 'vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'

import App from './App'
import router from './router'
import store from './store'
import settingsStore from './store/modules/settings'

Vue.use(Vuetify, {
  theme: {
    primary: settingsStore.state.theme.colors.primary,
    secondary: settingsStore.state.theme.colors.secondary,
    accent: settingsStore.state.theme.colors.accent,
    info: settingsStore.state.theme.colors.info,
    warning: settingsStore.state.theme.colors.warning,
    error: settingsStore.state.theme.colors.error
  }
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

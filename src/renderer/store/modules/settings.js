import config from '../../../main/lib/config'

const state = {
  general: config.get('settings.general'),
  notifications: config.get('settings.notifications'),
  theme: config.get('settings.theme'),
  speedDialOptions: config.get('settings.speedDialOptions'),
  columnOptions: config.get('settings.columnOptions'),
  tweetOptions: config.get('settings.tweetOptions'),
  composeOptions: config.get('settings.composeOptions')
}

const mutations = {
  toggleDarkTheme (state) {
    state.isDarkTheme = !state.isDarkTheme
    config.set('settings.theme.isDarkTheme', !state.theme.isDarkTheme)
  }
}

/** const actions = {
    someAsyncTask ({commit}) {
      commit('INCREMENT_MAIN_COUNTER')
    }
} **/

export default {
  state,
  mutations
}

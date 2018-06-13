import appIsDev from 'electron-is-dev'

import config from '../../../main/lib/config'
import exampleSettings from '../../../resources/settings.example.json'

var state = {}

if (!appIsDev) {
  state = config.get('settings')
} else {
  state = exampleSettings.settings
}

const mutations = {
  toggleDarkTheme (state) {
    state.isDarkTheme = !state.isDarkTheme
    config.set('settings.theme.isDarkTheme', !state.theme.isDarkTheme)
    console.log('Toggling theme...')
  }
}

const actions = {
  toggleDarkTheme: ({ commit }) => commit('toggleDarkTheme')
}

export default {
  state,
  mutations,
  actions
}

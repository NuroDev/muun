const state = {
  showSettingsModal: false,
  showAccountsModal: false,
  showAddColumnModal: false,
  showAccountLoginModal: false,
  showKeyBindingsModal: false,
  settingsTabs: [
    {
      icon: 'view_list',
      title: 'General'
    },
    {
      icon: 'notifications',
      title: 'Notifications'
    },
    {
      icon: 'brush',
      title: 'Theme'
    },
    {
      icon: 'add_circle',
      title: 'Speed Dial'
    },
    {
      icon: 'view_column',
      title: 'Columns'
    },
    {
      icon: 'view_headline',
      title: 'Tweets'
    },
    {
      icon: 'info',
      title: 'Info'
    }
  ]
}

const mutations = {
  toggleSettingsModal (state) {
    state.showSettingsModal = !state.showSettingsModal
  },
  toggleAccountsModal (state) {
    state.showAccountsModal = !state.showAccountsModal
  },
  toggleAddColumnModal (state) {
    state.showAddColumnModal = !state.showAddColumnModal
  },
  toggleAccountsLoginModal (state) {
    state.showAccountLoginModal = !state.showAccountLoginModal
  },
  toggleKeyBindingsModal (state) {
    state.showKeyBindingsModal = !state.showKeyBindingsModal
  }
}

const actions = {
  toggleSettingsModal ({commit}) {
    commit('toggleSettingsModal')
  },
  toggleAccountsModal ({commit}) {
    commit('toggleAccountsModal')
  },
  toggleAddColumnModal ({commit}) {
    commit('toggleAddColumnModal')
  },
  toggleAccountsLoginModal ({commit}) {
    commit('toggleAccountsLoginModal')
  },
  toggleKeyBindingsModal ({commit}) {
    commit('toggleKeyBindingsModal')
  }
}

export default {
  state,
  mutations,
  actions
}

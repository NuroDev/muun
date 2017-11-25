const state = {
  general: {
    showDrawer: true,
    hiddenMessages: true,
    launchOnStartUp: false,
    checkOnlineStatus: true,
    checkTwitterStatus: true,
    embedThumbnails: true,
    backgroundImageUrl: 'https://i.imgur.com/DB2dfgF.jpg',
    sidebarItemsSmallerBtn: false
  },
  notifications: {
    enabled: false,
    type: {
      mentions: true,
      messages: true,
      connectionStatus: true,
      twitterStatus: true
    }
  },
  theme: {
    isDarkTheme: true,
    colors: {
      primary: '#03A9F4',
      accent: '#ce93d8',
      secondary: '#424242',
      info: '#0D47A1',
      warning: '#ffb300',
      error: '#B71C1C',
      success: '#B71C1C'
    }
  },
  speedDialOptions: {
    fab: false,
    direction: 'left',
    transition: 'slide-x-reverse-transition',
    hover: false,
    large: false,
    smallItems: false,
    hideItemsTooltip: false,
    items: [
      {
        icon: 'edit',
        title: 'New Tweet'
      },
      {
        icon: 'image',
        title: 'Add Image'
      },
      {
        icon: 'gif',
        title: 'Add Gif'
      },
      {
        icon: 'access_time',
        title: 'Schedule Tweet'
      },
      {
        icon: 'mail',
        title: 'New Message'
      }
    ]
  },
  columnOptions: {
    draggable: true,
    loadingIndicator: true,
    hideScrollbars: true,
    showHeaderIcons: true,
    showDivider: true,
    thinnerScrollbars: false,
    columnWidth: 324,
    columnPadding: 10,
    columnHeaderSpacer: 0
  },
  tweetOptions: {
    autoPlayGifs: true,
    fontSize: 14,
    showSensitiveContent: true,
    timeFormat: 0,
    nameFormat: 0,
    roundedAvatars: true,
    showImageUrl: true,
    hideInReplyToHeader: false,
    replaceStarsWithHearts: false
  },
  composeOptions: {
    replaceWordCountWithCircle: true,
    smallerButtons: false
  }
}

const mutations = {
  toggleTheme (state) {
    state.isDarkTheme = !state.isDarkTheme
  }
}

// const actions = {
//     someAsyncTask({
//         commit
//     }) {
//         // do something async
//         commit('INCREMENT_MAIN_COUNTER')
//     }
// }

export default {
  state,
  mutations
}

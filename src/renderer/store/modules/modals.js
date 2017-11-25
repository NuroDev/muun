const state = {
  showSettingsDialog: false,
  showAccountsDialog: false,
  showAddColumnDialog: false,
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
      icon: 'palette',
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

export default {
  state
}

const idPrefix = 'column-'

const state = {
  columns: [
    {
      id: idPrefix + 0,
      icon: 'home',
      title: 'Home'
    },
    {
      id: idPrefix + 1,
      icon: 'notifications',
      title: 'Notifications'
    },
    {
      id: idPrefix + 2,
      icon: 'rss_feed',
      title: 'Activity'
    },
    {
      id: idPrefix + 3,
      icon: 'person',
      title: 'User'
    },
    {
      id: idPrefix + 4,
      icon: 'forum',
      title: 'Messages'
    }
  ]
}

export default {
  state
}

import config from '../../../main/lib/config'

const columnPrefix = 'column-'

const state = {
  columns: config.get('columns')
}

const mutations = {
  setId (state, num, id) {
    state.columns[num].id = columnPrefix + id
  },
  setIcon (state, num, newIcon) {
    state.columns[num].icon = newIcon
  },
  setTitle (state, num, newTitle) {
    state.columns[num].title = newTitle
  },
  updateColumnsOrder (state, columns) {
    state.columns = columns
  }
}

export default {
  state,
  mutations
}

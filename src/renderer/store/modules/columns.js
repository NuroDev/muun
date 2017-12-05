import appIsDev from 'electron-is-dev'

import config from '../../../main/lib/config'
import exampleColumns from '../../../resources/columns.example.json'

var state = {}

if (!appIsDev) {
  state = config.get('columns')
} else {
  state = exampleColumns.columns
}

const mutations = {
  setId (state, num, id) {
    state.columns[num].id = 'column-' + id
  },
  setIcon (state, num, newIcon) {
    state.columns[num].icon = newIcon
  },
  setTitle (state, num, newTitle) {
    state.columns[num].title = newTitle
  },
  updateColumnsOrder (state, columns) {
    state.columns = columns.map((column, i) => {
      column.order = i

      return column
    })
  }
}

export default {
  state,
  mutations
}

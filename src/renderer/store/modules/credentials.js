import appIsDev from 'electron-is-dev'

import config from '../../../main/lib/config'
import exampleCredentials from '../../../resources/credentials.example.json'

var state = {}

if (!appIsDev) {
  state = config.get('credentials')
} else {
  state = exampleCredentials.credentials
}

export default {
  state
}

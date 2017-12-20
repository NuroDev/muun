import appIsDev from 'electron-is-dev'

import devCredentials from '../../resources/credentials.json'
import prodCredentials from '../../renderer/store/modules/credentials'
import Twitter from 'twitter'

var credentials = {}

if (!appIsDev) {
  credentials = prodCredentials.state.credentials
} else {
  credentials = devCredentials.credentials
}

const twitter = new Twitter({
  consumer_key: credentials.consumerPublic,
  consumer_secret: credentials.consumerSecret,
  access_token_key: credentials.accessPublic,
  access_token_secret: credentials.accessSecret
})

export default twitter

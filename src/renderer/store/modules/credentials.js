import config from '../../../main/lib/config'

const state = {
  credentials: {
    consumerPublic: config.get('credentials.consumerPublic'),
    consumerSecret: config.get('credentials.consumerSecret'),
    accessPublic: config.get('credentials.accessPublic'),
    accessSecret: config.get('credentials.accessSecret'),
    callbackURL: config.get('credentials.callbackURL')
  }
}

export default {
  state
}

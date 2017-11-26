import Config from 'electron-store'

import exampleColumns from '../../resources/columns.example.json'
import exampleCredentials from '../../resources/credentials.example.json'
import exampleSettings from '../../resources/settings.example.json'

const config = new Config({
  defaults: {
    columns: exampleColumns.columns,
    credentials: exampleCredentials.credentials,
    settings: exampleSettings.settings
  }
})

export default config

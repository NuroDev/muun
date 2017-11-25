'use strict'

const electron = require('electron')
const appIsDev = require('electron-is-dev')
const appLog = require('electron-log')
// const ElectronStore = require('electron-store')

var app = electron.app
var appMenu = electron.Menu
var appGlobalShortcut = electron.globalShortcut
// var appStore = new ElectronStore()

let mainWindow
let winURL

/**
TODO: Use this function in mainWindow backgroundColor param
Have it pull isDarkTheme boolean from electron store

function setBackgroundColor () {
  if (appStore.get('settings.general.isDarkTheme') === true) {
    return '#424242'
  } else {
    return '#ffffff'
  }
}
**/

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new electron.BrowserWindow({
    title: app.getName(), // Window title
    width: 1326, // Window width
    height: 922, // Window height
    minWidth: 562, // Minimum window width
    minHeight: 582, // Minimum window height
    backgroundColor: '#424242', // Background Color
    frame: true, // Window frame is true
    titleBarStyle: 'hidden-inset', // Remove titlebar on MacOS
    center: true, // Center app window?
    movable: true, // Is window movable?
    resizable: true, // Is window resizable?
    fullscreenable: true, // Is window fullscreenable?
    maximizable: true, // Is window maximizable?
    autoHideMenuBar: true, // Hide menubar in window on launch
    webPreferences: {
      nodeIntegration: true,
      plugins: true
    }
  })

  // Setting App menu
  appLog.info('| MAIN | Loading menu |')
  appMenu.setApplicationMenu(require('./menu'))

  // If running in dev environment
  if (appIsDev) {
    winURL = `http://localhost:9080`
    mainWindow.openDevTools()
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
  } else {
    winURL = `file://${__dirname}/index.html`
  }

  // Open dev tools global shortcut (CommandOrControl+Shift+I)
  appGlobalShortcut.register('Shift+CommandOrControl+I', () => {
    if (mainWindow.isFocused()) {
      appLog.info('| MAIN | DEV ENV | Toggling dev tools |')
      mainWindow.webContents.toggleDevTools()
    }
  })

  // Load URL from winURL const
  appLog.info('| MAIN | Loading URL |')
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

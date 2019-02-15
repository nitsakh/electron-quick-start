// Modules to control application life and create native browser window
const {app, protocol, BrowserWindow} = require('electron')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

protocol.registerSchemesAsPrivileged([{scheme: 'rocket', privileges: { standard: true, secure: true, bypassCSP: true, corsEnabled: true, allowServiceWorkers: true}}])

function createWindow () {

  // protocol.registerFileProtocol('rocket', (request, callback) => {
  //   console.log(request.url);
  //   const wpath = path.resolve(__dirname, 'worker', 'worker_test.js');
  //   console.log(wpath);
  //   callback(wpath);
  // });

  // protocol.registerHttpProtocol('rocket', (request, callback) => {
  //   console.log(request)
  //   callback({url: request.url, method: request.method})
  // })


  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: {
    nodeIntegration: true,
    nodeIntegrationInWorker: true,
    webviewTag: true
  }})

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  mainWindow.loadURL('http://localhost:9090')
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

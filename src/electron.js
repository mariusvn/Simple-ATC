const electron = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
require('electron-reload');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  const path = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../public/index.html')}`;
  mainWindow.loadURL(path);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

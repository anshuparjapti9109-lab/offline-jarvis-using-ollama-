const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 700,
    minWidth: 900,
    minHeight: 500,
    frame: false,
    backgroundColor: '#020d14',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    title: 'JARVIS',
    icon: path.join(__dirname, 'public', 'icon.png'),
  });

  win.loadFile(path.join(__dirname, 'public', 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.on('minimize', () => win?.minimize());
ipcMain.on('maximize', () => win?.isMaximized() ? win.unmaximize() : win.maximize());
ipcMain.on('close', () => win?.close());

const { app, BrowserWindow } = require('electron')
let ipc = require('electron').ipcMain
const path = require('path')
const crypto = require('crypto')
const server = require("http")
const fs = require('fs')
const Gun = require('gun')

let gun = new Gun({web: 
  server.createServer(function (req, res) {
    let filePath = '.' + req.url
    let items = filePath.split('/')
    if (filePath == './'){
      filePath = './index.html'
    }  
    if(filePath == './gun'){
      filePath = './node_modules/gun/examples/index.html'
    } else
    if(items[0] == 'gun' && items[1]){
      items.shift()
      items.join('/')
      filePath = './node_modules' + req.url
    }
  
    let extname = path.extname(filePath)
    let contentType = 'text/html'
    switch (extname) {
      case '.js':
        contentType = 'text/javascript'
        break
      case '.css':
        contentType = 'text/css'
        break
      case '.json':
        contentType = 'application/json'
        break
      case '.png':
        contentType = 'image/png'
        break      
      case '.jpg':
        contentType = 'image/jpg'
        break
      case '.wav':
        contentType = 'audio/wav'
        break
    }
  
    fs.readFile(filePath, function(error, content) {
      if (error) {
        if(error.code == 'ENOENT'){
          fs.readFile('./404.html', function(error, content) {
            res.writeHead(404, { 'Content-Type': contentType })
            res.end(content, 'utf-8')
          })
        }
        else {
          res.writeHead(500)
          res.end('Sorry, check with the site admin for error: '+error.code+' ..\n')
          res.end() 
        }
      }
      else {
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(content, 'utf-8')
      }
    })
  }).listen(30210)
})

app.whenReady().then(() => {
  let window = new BrowserWindow({show: true})
  window.loadURL('http://0.0.0.0:30210')
  window.on('closed', () => {
    app.quit()
  })
})
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

window.onload = (e) => {
    const { ipcRenderer } = require('electron')
    setTimeout(() => {
        ipcRenderer.on('rocket', (event, message) => {
            console.log(`${new Date().toLocaleTimeString()}: ${message}`)
        })
        
        console.log(`${new Date().toLocaleTimeString()}: Sending message to main process. `)
        ipcRenderer.send('rocket', 'Message from renderer...')
        console.log(`${new Date().toLocaleTimeString()}: Message sent to main process.`)
    }, 2000)
}


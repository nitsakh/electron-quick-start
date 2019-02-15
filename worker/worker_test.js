

self.onconnect = (e) => {
    const port = e.ports[0]

    setInterval( () => {
            port.postMessage('qwerty')
    } , 1000 )
}
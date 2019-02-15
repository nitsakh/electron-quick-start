// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// const worker = new SharedWorker('rocket://host/worker_test');

const worker = new SharedWorker(`data:text/html,<script>
self.onconnect = (e) => {
    const port = e.ports[0]

    setInterval( () => {
            port.postMessage('qwerty')
    } , 1000 )
}</script>`)

worker.onerror = (x) => {
    console.log(x);
    console.log(x.message);
};

console.log(worker);
worker.port.onmessage = function (e) {
    console.log('MESSAGE => ', e);
};

worker.port.onmessageerror = function (e) {
    console.log('ERROR =>  ', e)
};

console.log('SENDING MESSAGE')
worker.port.postMessage('hiii');

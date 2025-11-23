const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

//register a listenner 
myFirstEmitter.on('greet',(name)=>{
    console.log(`Hello ${name}`)
});

myFirstEmitter.emit('greet', 'Sangam Mukherjee')





/* 
const http = require('http');
const EventEmitter = require('events');

// Create event emitter instance
const event = new EventEmitter();

// Register listener for custom event
event.on('requestEvent', () => {
    console.log('A new request was received on the server!');
});

// Create HTTP server
const server = http.createServer((req, res) => {
    // Emit custom event whenever request comes
    event.emit('requestEvent');

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the server!');
});

// Start server
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

*/
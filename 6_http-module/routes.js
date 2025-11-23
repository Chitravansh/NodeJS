const http = require('http');

/* In Node.js, when you’re working with the built-in HTTP module, 
the method res.writeHead() is used to set the status code and
 response headers before sending data back to the client. */


const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('Home page');
    } else if(url === '/projects'){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('Project page');
    } else {
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end('This page can not be found !');
    }
});

const port = 3000;

server.listen(port, ()=>{
    console.log(`Server is now listening to port ${port}`);
})
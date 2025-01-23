var http = require("http")
var server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World!');
})
server.listen(8001);
console.log("Server running at 8001")
const http = require('http');

http.createServer(function(req, res) {
 res.write("Second touch");
 res.end();
}).listen(3000);

console.log("Started server on port 3000 new");

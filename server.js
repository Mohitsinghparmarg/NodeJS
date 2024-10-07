
const http = require('http');

const server = http.createServer((req,res) => {
         
    if(req.url === "/mohit"){
             res.end("yes you are in /mohit")
    }
            res.end("successfully created the server");
})

server.listen(1234)
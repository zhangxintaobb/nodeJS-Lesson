const http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"context-Type":"text/plain"})
    res.write("<h1>hello world</h1>");
    //响应结束
    res.end();
}).listen(8080);
console.log("sever is listening 8080");


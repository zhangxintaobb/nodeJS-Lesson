const http = require("http");

var sever = http.createServer(function(req,res){
    /* 
    http协议，协议的结构    协议的请求响应过程
    状态码
    */
    res.writeHead(200,{"context-Type":"text/plain"})
    res.write("<h1>hello world</h1>");
    //响应结束
    res.end();
});

sever.listen(8080);
console.log("sever is listening 8081");
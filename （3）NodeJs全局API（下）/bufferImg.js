const http=require("http");
const fs=require("fs");
const path=require("path");
http.createServer(function(req,res){
    var filepath=path.join(__dirname,"/1.JPG");
    var imgBuffer =fs.readFileSync(filepath);
    var base64Data=imgBuffer.toString("base64");
    var imgSrc="data:image/jpg; base64,"+base64Data;
    var htmlSrc="<!DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"' /></body>"+"</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlSrc);
    res.end();
}).listen(8081);
console.log("server is listening 8081");
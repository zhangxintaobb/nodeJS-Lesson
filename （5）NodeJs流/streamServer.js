var http=require("http");
var fs=require("fs");
var path=require("path");
http.createServer(function(req,res){
    var filePath=path.join(__dirname,"/data.txt");
    var readStream=fs.createReadStream(filePath);
    // console.log(readStream);
    readStream.pipe(res);
}).listen(8081);
console.log("server is listening 8081");
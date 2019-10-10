const fs=require("fs");
const http=require("http");
const path=require("path");

var fileName=process.argv[2];
http.createServer(function(req,res){
    if(fileName==undefined){
        var reader=fs.createReadStream(process.argv[1]);
        reader.pipe(res);
    }
    else{
        var filePath=path.join(__dirname,fileName);
        if(fs.existsSync(filePath)){
            var reader=fs.createReadStream(filePath);
            reader.pipe(res);
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("err");
        }
    }
}).listen(8081);

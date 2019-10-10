// const http=require("http");
// const fs=require("fs");
// const path=require("path");
// var file=process.argv[2];

// http.createServer(function(req,res){
//     if(file==undefined){
//         fileContent=fs.readFileSync(path.join(__dirname,"/fileReader1.js"));
//         res.end(fileContent.toString());
//     }
//     else{
//         var filepath=path.join(__dirname,file);
//         if(fs.existsSync(filepath)){
//             fileContent=fs.readFileSync(filepath);
//             res.end(fileContent.toString());
//         }
//         else{
//             res.end("error");
//         }
//     }
// }).listen(8081);
// console.log("server is listening 8081");



const http=require("http");
const fs=require("fs");
const path=require("path");
var fileName=process.argv[2];

http.createServer(function(req,res){
    if(fileName==undefined){
        var str="hello"
        /**
         * fs.readFIle()是一个异步方法，执行语句不会等待
         * 文件读取完成，就直接执行后面的语句。
         * 回调函数是等到文件读取完成后才执行
         */
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err)
            }
            else
            {
                console.log(data.toString());
                str=data.toString();
                res.writeHead(200,{"content-Type":"text/html;charset=utf-8"})
                res.end(str); 
                
            }
        })  
          
    }
    else{
        var pathName=path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            res.writeHead(200,{"content-Type":"text/html;charset=utf-8"})
            res.end("文件不存在");
        }
    }
}).listen(8081);
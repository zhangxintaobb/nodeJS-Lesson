// const http=require("http");
// const fs=require("fs");
// const path=require("path");
// var file=process.argv[2];
// http.createServer(function(req,res){
//     if(file==undefined){
//         var fid=fs.open(path.join(__dirname,"/fileReader2.js"),function(err,data){
//             if(err){
//                 res.end("err")
//             }
//             else{
//                 var buf=Buffer.alloc(30);
//                 var len=fs.statSync(path.join(__dirname,"/fileReader2.js")).size;
//                 fs.read(fid,buf,0,len,function(err,data){
//                     if(err){
//                         res.end("err");
//                     }
//                     else{
//                         res.end(data.toString());
//                     }
//                 })
//             }            
//         })
//     }
//     else{
//         var filepath=path.join(__dirname,file);
//         if(fs.existsSync(filepath)){
//         }
//         else{
//             res.end("error");
//         }
//     }
// }).listen(8081);



const fs=require("fs");
const http=require("http");
const path=require("path");

var fileName=process.argv[2];
http.createServer(function(req,res){
    console.log(path.join(__dirname));
    if(fileName==undefined){
        fs.open(process.argv[1],"r+",function(err,fd){
            var statObj=fs.statSync(process.argv[1]);
            var buf=Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                if(err){
                    console.log("err");
                }
                else
                {
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            })
        })
    }
    else{
        var filepath=path.join(__dirname,fileName);
        if(fs.existsSync(filepath)){
            fs.open(filepath,"r+",function(err,fd){
                var statObj=fs.statSync(filepath);
                var buf=Buffer.alloc(statObj.size);
                fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                    if(err){
                        console.log("err");
                    }
                    else
                    {
                        res.end(buf.toString());
                        fs.closeSync(fd);
                    }
                })
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8081);

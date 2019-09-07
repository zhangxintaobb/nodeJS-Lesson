//1.引入http原生模块
const http = require("http");
const fs = require("fs");
const url = require("url");
const path=require("path");
//2.创建一个服务器,只要有http请求，访问端口，
//就会执行回调函数里面的内容
var server = http.createServer(function(req,res){
    //req.url,表示url地址，端口以后的内容
    //使用了url.parse将req.url转化为了对象，对象提议pathname
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    //根据资源路径，可以决定执行那一段代码
    console.log(urlPathName);
    if(urlPathName=="/favicon.ico"){
        res.end()
    }
    else if(urlPathName=="/")
    {
    //4.当客户端的http请求发起的时候，才会执行回调函数里面的内容
    // console.log(urlObj);
    var htmlPath = __dirname + "\\view\\view.html";
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
}
    else if(urlPathName=="/js/view.js"){
        var jsPath = path.join( __dirname,"/js/view.js");
        var jsContent = fs.readFileSync(jsPath);
        // console.log(jsContent);
        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.write(jsContent);
        res.end();
    }
    // console.log(htmlContent);
})
//3.服务监听一个端口
server.listen(8080);
console.log("server is listening 8080");
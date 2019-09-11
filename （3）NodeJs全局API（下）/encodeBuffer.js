var username=process.argv[2];
var password=process.argv[3];
if(username !=undefined && password!=undefined){
    var str="用户名:"+username+"  密码"+password;
    console.log(str);
    var buf=Buffer.from(username+""+password,"utf8");
    console.log("base64加密:"+buf.toString("base64"))
}
else{
    console.log("用户名或密码不为空")
}

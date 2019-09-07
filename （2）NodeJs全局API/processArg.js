//传入一个命令行参数
var arg1 = process.argv[2];
//判断传入参数
//1.传入参数位-h
if(arg1=="-h"){
    console.log("请传入一个数学运算式");
}
//2.未传入参数
else if(arg1 == undefined){
    console.log("请输入参数");
}
//3.参数为算术运算式
else{
    console.log(arg1+"=%d",eval(arg1));
}
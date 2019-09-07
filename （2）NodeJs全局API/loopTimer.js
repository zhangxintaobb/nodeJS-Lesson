//定义一个定时执行，每隔500毫秒执行一次loop函数
setInterval(() => {
    loop();
}, 500);
function loop(){
    console.log("I will loop forever");
}
setTimeout(() => {
    console.log("Game over");
    process.exit();
}, 5000);
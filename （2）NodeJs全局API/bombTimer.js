//定义Bomb构造函数
function Bomb(){
    this.message="bomb!!!",
    this.explode=function(){

        console.log(this.message);
    }
}
//实例化对象
let bomb = new Bomb();
//延迟2秒执行该方法
setTimeout(() => {
    bomb.explode();
}, 2000);

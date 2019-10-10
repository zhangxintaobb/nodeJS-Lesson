var Radio=require("./listenRadio.js");
var name=process.argv[2];
var FM=process.argv[3];
var radio=new Radio(name,FM);
radio.on("open",radio.play);
radio.emit("open");
setTimeout(function(){
        console.log('lalala...');
        radio.on("stop",radio.stop);
        radio.emit("stop");
},2000)




// const util = require("util"); 

// function Parent(name){
//     this.name=name;
// }
// Parent.prototype.show=function(){
//     console.log(this.name);
// }
// function Child(){

// }
// util.inherits(Child,Parent);
/**
 * 1.Parent.call(this) 
 * Child.prototype.__proto__=Parent.prototype
 * 2.Child extends Parent{}
 * 3.util.inherits(Child,Parent)
 */
var Dog=require("./dogBark.js");
var dog1=new Dog("teddy",5);

function barkFun(){
    console.log(this.name+"barked!!!");
    console.log(this.energy);
}

dog1.on("bark",barkFun);
var intervalId=setInterval(function(){
    if (this.energy >=0) { 
        dog1.emit("bark");
    }
    else{
        intervalId.unref();
    }
    dog1.energy=dog1.energy-1;
},1000)

dog1.emit("bark");
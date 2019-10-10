const events=require("events");
var EventsEmitter=events.EventEmitter;
function Dog(name,engergy){
    EventsEmitter.call(this);
    this.name=name;
    this.engergy=engergy;
    var that=this;
    setInterval(() => {
        that.emit("brak");
    }, 1000);
}
Dog.prototype.__proto__=EventsEmitter.prototype;
var dog1=new Dog("taidi",4);
var dog2=new Dog("zangao",8);
dog1.on("brak",function(){
    if(this.engergy==0){
        console.log(this.name+"  barked!"+" energy:"+this.engergy);
        process.exit();
    }
    else{
        console.log(this.name+"  barked!"+" energy:"+this.engergy);
        this.engergy=this.engergy-1;
    }
})
dog2.on("brak",function(){
    if(this.engergy==0){
        console.log(this.name+"  barked!"+" energy:"+this.engergy);
        process.exit();
    }
    else{
        console.log(this.name+"  barked!"+" energy:"+this.engergy);
        this.engergy=this.engergy-1;
    }
})

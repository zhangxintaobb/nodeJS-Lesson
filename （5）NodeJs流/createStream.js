const stream=require("stream");
const readable=stream.Readable;
function MyReadable(a){
    readable.call(this);
    this.push(a);
}
MyReadable.prototype.__proto__=readable.prototype;

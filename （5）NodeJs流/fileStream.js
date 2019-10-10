const fs=require("fs");
const path=require("path");
var readPath=path.join(__dirname,"/from.txt");
var writePath=path.join(__dirname,"/to.txt");
var readStream=fs.createReadStream(readPath);
console.log(readStream);
var writeStream=fs.createWriteStream(writePath);
readStream.pipe(writeStream);



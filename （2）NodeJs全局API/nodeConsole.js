//定义一个对象，包含三个字段:name,age,qq
var user={
    name:"zhangxintao",
    age:20,
    qq:"1309526743"
}
//使用三种占位符，分别输出三种变量类型：字符串，整数和json数据
//1.字符串
console.log("name:%s",user.name);
//2.整数
console.log("age:%d",user.age);
//3.json数据
console.log("user:%j",user);
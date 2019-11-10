var express = require('express');
var router=express.Router();
var data = require('../public/javascripts/data.json')
var app=express();
router.get('/',function(req,res,next){
    res.render('login')
})
router.post('/user',function(req,res,next){
    console.log(req.body.username);
    console.log(data.users[0].username);
    console.log(req.body.password);
    console.log(data.users[0].pwd);
    if(data.users[0].username==req.body.username&&data.users[0].pwd==req.body.password){   
        var List=[];
        for(var i=0;i<data.chapterList.length;i++){
            var a={ title:data.chapterList[i].title,views:data.chapterList[i].views}
            List.push(a);
        }
        console.log(List)
        res.render('list',{chapterList:List}) 
    }
    else{
        res.writeHead(200,{"Content-Type":'text/html; charset=utf-8'})
        res.end("用户名或密码错误，请重新输入")
    }
})

module.exports = router;
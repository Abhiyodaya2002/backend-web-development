const express = require("express");
 const bodyparser=require("body-parser");
 const request=require("request");
const { append } = require("express/lib/response");
const path=require("path");
const app=express();
app.use(express.static("public"));// It is used to serve our static files to the server like local images or css etc
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/signup.html");
})
app.post("/",function(req,res)
{
    var fn=req.body.Fname;
    var sn=req.body.Sname;
    var em=req.body.email;
    console.log(fn,sn,em);
})
 app.listen(3000,function()
 {
     console.log("server running at port 3000");
 })






 //api key: 70cddcf1019beacccd1cf3b4c6b542ac-us14
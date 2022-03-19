const express =require('express');
const res = require('express/lib/response');
const app =express();
app.get("/",function(request,response)
{
response.send("<em>pandey here</em>");
});
app.get("/about",function (req,res){
res.send("My name is pandey. I am a coder.");
});
app.get("/contact", function(req,res)
{
    res.send("abhiyodaypandey@gmail.com");
});
app.listen(3000,function()
{
    console.log("server started on port 3000");
});
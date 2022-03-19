const express=require("express");
const bodparser=require("body-parser");
const { append } = require("vary");
const { resolveSoa } = require("dns");

const app=express();

app.set("view engine","ejs");//From ejs.co website documentaion

app.get("/",function(req,res)
{
   // res.send("Pandey Here");

   var date=new Date();
   var day=date.getDay();
   var word="";
   if(day==6 || day==0)
   {
       word="weekend";
   }
   else
   {
       word="weekday";
   }

   res.render("list",{whichday : word}); //The res.render() function is used to render a view and sends the rendered HTML string to the client.
   

   //Here we are creating our response by rendering a file list which has to exist inside "views" folder which has a file with extension .ejs .And then into that list file we are passing a single variable that has the name "whichday" and the value which we are giving it is the value of our variable "word".
})
app.listen(3000,function()
{
    console.log("Port running at 3000");
})
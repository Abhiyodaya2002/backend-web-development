const express =require ("express");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended:true}));

//note: "/" is called route .....more specifically home route
//----> for index.html
app.get("/",function(req,res)
{
    //when we receive the get request on our home route we will send our html file for our client to see it.
res.sendFile(__dirname+"/index.html");

});
app.post("/",function(req,res)
{
    //post request are meant to submit data to a specified source.
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var ans=n1+n2;
    res.send(""+ans); 
});


//note: "/bmicalculator" is also called route
//-----> for bmicalculator.html
app.get("/bmicalculator",function(req,res)
{
res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator",function(req,res)
{
    var a=parseFloat(req.body.w);
    var b=parseFloat(req.body.h);
    var ans=(a+b)*2;
    res.send("Your BMI is : "+ans);
});


app.listen(3000,function()
{
    console.log("port 3000 set up");
}); 
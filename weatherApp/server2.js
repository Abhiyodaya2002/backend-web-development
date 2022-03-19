//Here we taking an input of a city name from user.Then we are parsing the city name using body parser and  Then with the help of weather api we are finding the temperature of that city


const express =require("express");
const res = require("express/lib/response");
const https=require("https"); //---->inbuilt node package hence we dont need to install it externally using npm. 
const { parse } = require("path");

const bodyparser=require("body-parser");

//you can read about https node package at nodejs.com website or simply write "https node" at google.

const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
   res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res)
{
   var name=req.body.cityname;
   const url="https://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=ecbea08664372cf3a7c471b2dd8d63e7&units=metric";
   https.get(url,function(response)
   {
       //we are  making https get request over the internet through this url which supposed to fetch some weather data
   
      console.log(response.statusCode); //---> status code 200 means "ok"
      response.on("data",function(data)
      {
          const weatherdata=JSON.parse(data); //we are here parsing the JSON format data into javascript object
          //And then we are digging into its components to get the required piece of info.
          const temp=weatherdata.main.temp;
          console.log(temp);
          const weatherdes=weatherdata.weather[0].description;
          console.log(weatherdes);
   
        /*  res.send("<h1>The temperature of Lucknow is "+ temp+" degree celsius. " +" Weather description is " +weatherdes+"</h1>");
        */
       //WE can send these two info like this also:
       res.write("<h1>The temperature of "+name+" is "+ temp+" degree celsius. </h1>");
       res.write("<p> Weather description is " +weatherdes + "</p>");
       res.send();
      })
   
   })
})
app.listen(3000,function (){
   console.log( "port set up at 3000");
});
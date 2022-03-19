const express=require("express");
const bodyparser=require("body-parser");
const { append } = require("vary");
const { resolveSoa } = require("dns");

const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");//From ejs.co website documentaion


var items=[]; //array to store list items
app.get("/",function(req,res)
{
   // Notes on toLocaleString(locales, options) function: --->
   //The toLocaleString() method returns a string with a language sensitive representation of this date.
   //The results provided by toLocaleString() can be customized using the options argument.
   // In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the locales argument:
   var today=new Date();
   var option={
     weekday :"long",
     day :"numeric",
     month:"long"
   };
   var day=today.toLocaleDateString('en-US',option);
   res.render("list",{whichday:day, newlistitems:items});
})

app.post("/",function(req,res)
{
    var item=req.body.newitem;
   items.push(item);
    res.redirect("/");//---> When a post request is triggered on our home route , we will save the value of the  value of newitem  to a variable called item and it will redirect to the home route which then triggers the app.get for our home route and it render the list template passing both the "whichday" as well as "newlistitems".
})
app.listen(3000,function()
{
    console.log("Port running at 3000");
})


/*
To summerize the whole code:
->When we first load up our home page we go through app.get and render the list.ejs passing in two variables :
one called "whichday" and another called "newlistitems".

->Now newlistitems is set to items array and it gets passed into list.ejs under this variable name "newlistitems".And over here we have a for loop that loops through the entire length of the "newlistitems" array and it renders a new li for each item which is inside the array.

->Now when a user adds a new item through the text input then that gets saved under the variable name "newitem" and we trigger a post request to the home route which will be caught by app.post and when we are inside app.get we grab the value of "newitem" and then we save it to a variable called "item" and we add that item to our "items" array.And then we are redirected to the home route.

->Now we go back to app.get but now the items array is increased by a size of one and our new item get pushed at the end of the array.

->And now we are able to go ahead and render list again and pass over the now updated array with all of our list items.


 */
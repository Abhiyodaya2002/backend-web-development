//from node.js module last lecture of angela yu
//supervillains generator
const vill =require("supervillains");
var a=vill.random();
console.log(a);


//otp generator
const otpGenerator = require('otp-generator')
var otp =otpGenerator.generate(6,{ digits : true,upperCaseAlphabets: false,lowerCaseAlphabets: false,  specialChars: false });
console.log(otp);
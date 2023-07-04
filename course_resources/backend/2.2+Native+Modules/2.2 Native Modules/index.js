 const fs = require("fs");

 fs.writeFile("message.txt","hello from Node JS",(err)=>{
    if(err) throw err;
    console.log("this file has been saved");
 });
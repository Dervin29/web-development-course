const fs = require("fs");

//writing file
fs.writeFile("message.txt","i'm alan, a full stack developer",(err)=>{
    if(err)throw err;
    console.log("the file has been saved");
});


//reading file
fs.readFile('./message.txt',"utf8", (err, data) => {
    //error handling
    if (err) throw err;
    console.log(data);
  });
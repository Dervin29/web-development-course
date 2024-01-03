import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));


var isAuthorized = false;

const passCheck=((req,res,next)=>{
    const password = req.body["password"];
    if(password == "ILoveProgramming"){
        isAuthorized=true;
    }
    next();
}
)

app.use(passCheck);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
   if(isAuthorized){
    res.sendFile(__dirname + "/public/secret.html");
   }
   else{
    res.sendFile(__dirname + "/public/index.html");
   }
  })

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
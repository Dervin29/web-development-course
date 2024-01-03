import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
var bn = "";

const bandName = ((req,res,next)=>{
  console.log(req.body);
  bn = req.body["street"] +"\t" + req.body["pet"];
  next();
})

app.use(bandName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
  res.send(`your band name is: ${bn}`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

import express from "express";
const app = express();
const port= 3000;

app.get("/", (req,res)=>{
  res.send("hello world");
})

app.get('/about',(req,res)=>{
  res.send("about page")
})

app.get('/contact',(req,res)=>{
  res.send("contact page")
})

app.listen(port,()=>{
  console.log(`listening ${port}`)
})
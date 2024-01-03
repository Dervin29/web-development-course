import express from 'express';

const app = express();


const today = new Date();
const day = today.getDay();

    let type = "a weekday"
    let adv = "its time to work hard"

    if(day == 0 || day ==6){
        type="the weekend";
        adv = "its time to have fun"
    }


app.get('/', (req,res)=>{
    
    res.render("index.ejs",{
        dayType: type, advice: adv
    })
})


app.listen(3000,()=>{
    console.log("listening");
})
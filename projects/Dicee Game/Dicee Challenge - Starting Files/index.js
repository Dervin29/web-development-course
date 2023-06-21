//dice 1
var randomNum1 = Math.floor(Math.random()*6+1); // to generate a random number range from 1-6
var randomImageSource1 = "images/dice" + randomNum1 + ".png"//images/dice(randomNum).png
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);//to update the value of src attribute


//dice 2 
var randomNum2 = Math.floor(Math.random()*6+1);
var randomImageSource2 = "images/dice" + randomNum2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//h1 tag

if(randomNum1>randomNum2){
    document.querySelectorAll("h1")[0].innerHTML="Player one wins";
}

else if(randomNum1<randomNum2){
    document.querySelectorAll("h1")[0].innerHTML="Player two wins";
}
else{
    document.querySelectorAll("h1")[0].innerHTML="DRAW!!!";
}

var randomNum1=Math.floor(Math.random()*6)+1;

var randomDiceImage="images/" + "dice" +randomNum1+ ".png";

document.querySelectorAll("img")[0];

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);



var randomNum2=Math.floor(Math.random()*6+1);

var randomDiceImage2="images/dice"+randomNum2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomDiceImage > randomDiceImage2){
    document.querySelector("h1").innerHTML="player 1 wins";
} else if( randomDiceImage2 > randomDiceImage){
    document.querySelector("h1").innerHTML="player 2 wins";
}else {
    document.querySelector("h1").innerhtml="draw";
}
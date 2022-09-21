var num=Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice" + num + ".png";
var randomImgSource= "images/" +randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute('src',randomImgSource);

var num1=Math.floor(Math.random()*6)+1;
var randomDiceImage1= "dice" + num1 + ".png";
var randomImgSource1= "images/" +randomDiceImage1;
var image1= document.querySelectorAll("img")[1];
image1.setAttribute('src',randomImgSource1);

if(num>num1){
    document.querySelector("h1").innerHTML="Player1 wins";
}
else if(num<num1){
    document.querySelector("h1").innerHTML="Player2 wins";
}
else{ document.querySelector("h1").innerHTML="match ties";}
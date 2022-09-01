var randomNumber1 =  Math.floor(Math.random() * 6) + 1;
var randomeDiceImage = "dice" + randomNumber1 + ".png"; // dice1 - dice6.png
var randomImageSource = "images/" + randomeDiceImage; // images/ dice1.png - dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomImageSource>randomImageSource2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomImageSource2>randomImageSource){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}

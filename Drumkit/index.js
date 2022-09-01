/*   function playSound(i) {
  var audio = new Audio("sounds\\tom-" + i + ".mp3");
  audio.play();
}  */

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress" , function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key){
  switch(key){
    case "w":
    var tom0 = new Audio("sounds/tom-0.mp3");
    tom0.play();
    break;
    case "a":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "s":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "d":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "j":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "k":
    var tom5 = new Audio("sounds/tom-5.mp3");
    tom5.play();
    break;
    case "l":
    var tom6 = new Audio("sounds/tom-6.mp3");
    tom6.play();
    break;

    default: console.log(buttonInnerHTML);
  }
}
function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}

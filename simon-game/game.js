//creating a color array
var buttonColors = ["red" , "blue" , "green", "yellow"];
//Empty array for storing the random chosen color
var gamePattern = [];
//Creating the function to choose random color and finding out which color button is clicked
function nextSequence(){
  var randomNumber = Math.floor(Math.random()* 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  //it finds out which button is clicked , every button has its id
  var colorName = $(this).attr("id");
//calling function to know the button color or id
  animate(colorName);
}
// creating  a function to give animate and sound to the button which is clicked

function animate(clickedColor){
  $("#" + clickedColor).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio ("sounds/" + clickedColor + ".mp3");
  audio.play();
}
//jquery to detect the button and handler function
$(".btn").click(nextSequence);

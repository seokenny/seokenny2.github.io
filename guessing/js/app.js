var clickedLetter = "";
var counter = 0
var tries = 5;

var randomWords = ["ACRONYM", "BOUNCER", "CLOAKED", "DUNGEON", "EXCLUDE", "FAILURE", "GRAPPLE", "HEALTHY", "INGRAIN", "JOYLESS", "KITCHEN", "LIGHTEN", "MINUTES", "NUGGETS", "ORGANIC", "POLEAXE", "QUIETLY", "REBIRTH", "SCOWLED", "TIGHTLY", "UNLUCKY", "VECTORS", "WELFARE", "YOUNGER", "ZODIACS"];

var randomizer = Math.floor(Math.random() * Math.floor(randomWords.length))

var chosenWord = randomWords[randomizer].split("");

function letterClicked(wasClicked){
  clickedLetter = wasClicked;
  console.log(clickedLetter);
  var noLetter = 0;
  var numRepeat = 0;
  for(var i = 0; i < chosenWord.length; i++){
    if(clickedLetter == chosenWord[i]){
      document.getElementById("letter"+(i+1)).innerHTML = clickedLetter;
      counter++;
      numRepeat++;
      addToCorrect(numRepeat);
    }
    else noLetter++;
  }
  if(noLetter == chosenWord.length){
    tries--;
    addToIncorrect();
  }
  removeLetter(wasClicked);
  reduceBattery();
  checkLives();
}

function checkLives(){
  if(tries == 0){
    document.getElementById("winLoseStatus").innerHTML = "ACCESS DENIED";
    document.getElementById("lockStatus").style.borderColor = "#cd5d5c";
    document.getElementById("lockStatus").style.color = "#cd5d5c";
    document.getElementById('lockedImage').classList.replace("show", "hidden");
    document.getElementById('deniedImage').classList.replace("hidden", "show");
  }
  if(counter == chosenWord.length){
    document.getElementById("winLoseStatus").innerHTML = "ACCESS GRANTED";
    document.getElementById("lockStatus").style.borderColor = "#6acc5d";
    document.getElementById("lockStatus").style.color = "#6acc5d";
    document.getElementById('lockedImage').classList.replace("show", "hidden");
    document.getElementById('accessImage').classList.replace("hidden", "show");
  }
}

function reloadPage(){
  window.location.reload();
}

function reduceBattery(){
  if(tries == 4){
    document.querySelector(".batteryLife5").style.backgroundColor = "#717080";
  }
  else if(tries == 3){
    document.querySelector(".batteryLife4").style.backgroundColor = "#717080";
  }
  else if (tries == 2){
    document.querySelector(".batteryLife3").style.backgroundColor = "#717080";
  }
  else if (tries == 1){
    document.querySelector(".batteryLife2").style.backgroundColor = "#717080";
  }
  else if (tries == 0){
    document.querySelector(".batteryLife1").style.backgroundColor = "#717080";
  }
}

function addToCorrect(numRepeat){
  if(numRepeat > 1){
    return;
  }
  document.querySelector(".listOfCorrect").innerHTML += " <div class='usedLetterBox " + clickedLetter + "'>" + clickedLetter + "</div>";
}

function addToIncorrect(){
  document.querySelector(".listOfIncorrect").innerHTML += " <div class='usedLetterBox " + clickedLetter + "'>" + clickedLetter + "</div>";
}

function removeLetter(wasClicked){
  document.getElementById(wasClicked).style.backgroundColor = "#666";
}
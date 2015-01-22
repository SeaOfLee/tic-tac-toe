// JS file for TTT
var p1Choices = [];
var p2Choices = [];

var topLeft = document.getElementById("topLeft");
var topMid = document.getElementById("topMid");
var topRight = document.getElementById("topRight");
var midLeft = document.getElementById("midLeft");
var midMid = document.getElementById("midMid");
var midRight = document.getElementById("midRight");
var botLeft = document.getElementById("botLeft");
var botMid = document.getElementById("botMid");
var botRight = document.getElementById("botRight");

topLeft.onclick = function() {
  console.log("clicked top left");
  if (player == 1) {
    topLeft.innerHTML = "X";
    p1Choices.push("0");
    console.log(p1Choices);
  }
  else {
    topLeft.innerHTML = "O";
    p2Choices.push("0");
    console.log(p2Choices);
  }
  turn();
  // topLeft.innerHTML = "x";
};

topMid.onclick = function() {
  console.log("clicked top middle");
  if (player == 1) {
    topMid.innerHTML = "X";
    p1Choices.push("1");
    console.log(p1Choices);
  }
  else {
    topMid.innerHTML = "O";
    p2Choices.push("1");
    console.log(p2Choices);
  }
  turn();
  // topMid.innerHTML = "x";
};

topRight.onclick = function() {
  console.log("clicked top right");
  if (player == 1) {
    topRight.innerHTML = "X";
    p1Choices.push("2");
    console.log(p1Choices);
  }
  else {
    topRight.innerHTML = "O";
    p2Choices.push("2");
    console.log(p2Choices);
  }
  turn();
  // topRight.innerHTML = "x";
};

midLeft.onclick = function() {
  console.log("clicked middle left");
  if (player == 1) {
    midLeft.innerHTML = "X";
    p1Choices.push("3");
    console.log(p1Choices);
  }
  else {
    midLeft.innerHTML = "O";
    p2Choices.push("3");
    console.log(p2Choices);
  }
  turn();
  // midLeft.innerHTML = "x";
};

midMid.onclick = function() {
  console.log("clicked middle square");
  if (player == 1) {
    midMid.innerHTML = "X";
    p1Choices.push("4");
    console.log(p1Choices);
  }
  else {
    midMid.innerHTML = "O";
    p2Choices.push("4");
    console.log(p2Choices);
  }
  turn();
  // midMid.innerHTML = "x";
};

midRight.onclick = function() {
  console.log("clicked middle right");
  if (player == 1) {
    midRight.innerHTML = "X";
    p1Choices.push("5");
    console.log(p1Choices);
  }
  else {
    midRight.innerHTML = "O";
    p2Choices.push("5");
    console.log(p2Choices);
  }
  turn();
  // midRight.innerHTML = "x";
};

botLeft.onclick = function() {
  console.log("clicked bottom left");
  if (player == 1) {
    botLeft.innerHTML = "X";
    p1Choices.push("6");
    console.log(p1Choices);
  }
  else {
    botLeft.innerHTML = "O";
    p2Choices.push("6");
    console.log(p2Choices);
  }
  turn();
  // botLeft.innerHTML = "x";
};

botMid.onclick = function() {
  console.log("clicked bottom middle");
  if (player == 1) {
    botMid.innerHTML = "X";
    p1Choices.push("7");
    console.log(p1Choices);
  }
  else {
    botMid.innerHTML = "O";
    p2Choices.push("7");
    console.log(p2Choices);

  }
  turn();
  // botMid.innerHTML = "x";
};

botRight.onclick = function() {
  console.log("clicked bottom right");
  if (player == 1) {
    botRight.innerHTML = "X";
    p1Choices.push("8");
    console.log(p1Choices);
  }
  else {
    botRight.innerHTML = "O";
    p2Choices.push("8");
    console.log(p2Choices);
  }
  turn();
  // botRight.innerHTML = "x";
};


var player = 1;

function turn() {
  
  if (player == 1) {
    player --;
  }
  else {
    player ++; 
  }
}
// Game logic determines winner by checking if p1 or p2Choices arrays contain the appropriate numbers. 

  

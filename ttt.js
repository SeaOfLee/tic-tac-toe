// JS file for TTT
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
};

topMid.onclick = function() {
  console.log("clicked top middle");
};

topRight.onclick = function() {
  console.log("clicked top right");
};

midLeft.onclick = function() {
  console.log("clicked middle left");
};

midMid.onclick = function() {
  console.log("clicked middle square");
};

midRight.onclick = function() {
  console.log("clicked middle right");
};

botLeft.onclick = function() {
  console.log("clicked bottom left");
};

botMid.onclick = function() {
  console.log("clicked bottom middle");
};

botRight.onclick = function() {
  console.log("clicked bottom right");
};
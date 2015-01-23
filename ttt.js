
// declares empty arrays that will store player choices

var box1, box2, box3, box4, box5, box6, box7, box8, box9;

box1 = [];
box2 = [];
box3 = [];
box4 = [];
box5 = [];
box6 = [];
box7 = [];
box8 = [];
box9 = [];

var allBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

// declares each div element as a variable by ID.

var topLeft = document.getElementById("topLeft");
var topMid = document.getElementById("topMid");
var topRight = document.getElementById("topRight");
var midLeft = document.getElementById("midLeft");
var midMid = document.getElementById("midMid");
var midRight = document.getElementById("midRight");
var botLeft = document.getElementById("botLeft");
var botMid = document.getElementById("botMid");
var botRight = document.getElementById("botRight");
var boxes = document.getElementsByClassName("boxes");

//uses onclick event handler to fill "empty" divs with X and O.
//Click also pushes corresponding number into p1/p2Choices arrays.  

// function clickedSquare() {
//     if(player == 1) {
//         this.innerHTML = "X";
//     } else {
//         this.innerHTML = "O";
//     }

topLeft.onclick = function() {
  console.log("clicked top left");
  if (player == 1) {
    topLeft.innerHTML = "X";
    box1.push(1);
    console.log("p1 chose box 1");
  }
  else {
    topLeft.innerHTML = "O";
    box1.push(2);
    console.log("p2 chose box 1");
  }
  this.onclick = null;
  checkWin();
  turn();
};

topMid.onclick = function() {
  console.log("clicked top middle");
  if (player == 1) {
    topMid.innerHTML = "X";
    box2.push(1);
    console.log("p1 chose box 2");
  }
  else {
    topMid.innerHTML = "O";
    box2.push(2);
    console.log("p2 chose box 2");
  }
  this.onclick = null;
  checkWin();
  turn();
};

topRight.onclick = function() {
  console.log("clicked top right");
  if (player == 1) {
    topRight.innerHTML = "X";
    box3.push(1);
    console.log("p1 chose box 3");
  }
  else {
    topRight.innerHTML = "O";
    box3.push(2);
    console.log("p2 chose box 3");
  }
  this.onclick = null;
  checkWin();
  turn();
};

midLeft.onclick = function() {
  console.log("clicked middle left");
  if (player == 1) {
    midLeft.innerHTML = "X";
    box4.push(1);
    console.log("p1 chose box 4");
  }
  else {
    midLeft.innerHTML = "O";
    box4.push(2);
    console.log("p2 chose box 4");
  }
  this.onclick = null;
  checkWin();
  turn();
  };

midMid.onclick = function() {
  console.log("clicked middle square");
  if (player == 1) {
    midMid.innerHTML = "X";
    box5.push(1);
    console.log("p1 chose box 5");
  }
  else {
    midMid.innerHTML = "O";
    box5.push(2);
    console.log("p2 chose box 5");
  }
  this.onclick = null;
  checkWin();
  turn();
};

midRight.onclick = function() {
  console.log("clicked middle right");
  if (player == 1) {
    midRight.innerHTML = "X";
    box6.push(1);
    console.log("p1 chose box 6");
  }
  else {
    midRight.innerHTML = "O";
    box6.push(2);
    console.log("p2 chose box 6");
  }
  this.onclick = null;
  checkWin();
  turn();
  
};

botLeft.onclick = function() {
  console.log("clicked bottom left");
  if (player == 1) {
    botLeft.innerHTML = "X";
    box7.push(1);
    console.log("p1 chose box 7");
  }
  else {
    botLeft.innerHTML = "O";
    box7.push(2);
    console.log("p2 chose box 8");
  }
  this.onclick = null;
  checkWin();
  turn();
};

botMid.onclick = function() {
  console.log("clicked bottom middle");
  if (player == 1) {
    botMid.innerHTML = "X";
    box8.push(1);
    console.log("p1 chose box 8");
  }
  else {
    botMid.innerHTML = "O";
    box8.push(2);
    console.log("p2 chose box 8");

  }
  this.onclick = null;
  checkWin();
  turn();
};

botRight.onclick = function() {
  console.log("clicked bottom right");
  if (player == 1) {
    botRight.innerHTML = "X";
    box9.push(1);
    console.log("p1 chose box 9");
  }
  else {
    botRight.innerHTML = "O";
    box9.push(2);
    console.log("p2 chose box 9");
  }
  this.onclick = null;
  checkWin();
  turn();
};

// Intended to allow for switching players. 

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
var p1Won = false;
var p2Won = false;


function checkWin(){
  // checks for horizontal wins
  if((box1[0] === 1) && (box2[0] === 1) && (box3[0] === 1)) {
    p1Wins();
  }
  if((box1[0] === 2) && (box2[0] === 2) && (box3[0] === 2)) {
    p2Wins(); 
  }    
  if((box4[0] === 1) && (box5[0] === 1) && (box6[0] === 1)) {
    p1Wins();
  }  
  if((box4[0] === 2) && (box5[0] === 2) && (box6[0] === 2)) {
    p2Wins();
  }  
  if((box7[0] === 1) && (box8[0] === 1) && (box9[0] === 1)) {
    p1Wins();
  }
  if((box7[0] === 2) && (box8[0] === 2) && (box9[0] === 2)) {
    p2Wins();  
   }

   // checks for vertical wins

  if((box1[0] === 1) && (box4[0] === 1) && (box7[0] === 1)) {
    p1Wins();
  }
  if((box1[0] === 2) && (box4[0] === 2) && (box7[0] === 2)) {
    p2Wins();
  }
  if((box2[0] === 1) && (box5[0] === 1) && (box8[0] === 1)) {
    p1Wins();
  }  
  if((box2[0] === 2) && (box5[0] === 2) && (box8[0] === 2)) {
    p2Wins();
  }  
  if((box3[0] === 1) && (box6[0] === 1) && (box9[0] === 1)) {
    p1Wins();
  }
  if((box3[0] === 2) && (box6[0] === 2) && (box9[0] === 2)) {
    p2Wins();
   }

   // checks for diagonal wins

  if((box1[0] === 1) && (box5[0] === 1) && (box9[0] === 1)) {
    p1Wins();
  }
  if((box1[0] === 2) && (box5[0] === 2) && (box9[0] === 2)) {
    p2Wins();
  }
  if((box3[0] === 1) && (box5[0] === 1) && (box7[0] === 1)) {
    p1Wins();
  }  
  if((box3[0] === 2) && (box5[0] === 2) && (box7[0] === 2)) {
    p2Wins();
  }  
}


function p1Wins() {
  p1Won = true;
  alert("Player 1 Wins!");
  roundNum = 0;
}

function p2Wins() {
  p2Won = true;
  alert("Player 2 Wins!");
  roundNum = 0;
 } 

function clearBoxes() {
for(i = 0; i < allBoxes.length; i++)
  allBoxes[i][0] = [];
}

function resetBoxes() {
  for(i=0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
  }
 } 

  // topLeft.innerHTML = "";
  // topMid.innerHTML = "";
  // topRight.innerHTML = "";
  // midLeft.innerHTML = "";
  // midMid.innerHTML = "";
  // midRight.innerHTML = "";
  // botLeft.innerHTML = "";
  // botMid.innerHTML = "";
  // botRight.innerHTML = "";


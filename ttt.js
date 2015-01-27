
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
// keeps track of # of turns, gets incremented after every choice is made. 
var roundNum = 0;

//uses onclick event handler to fill "empty" divs with X and O.
//pushes 1 or 2 into box arrays to keep track of score.
topLeft.onclick = function() {
  console.log("clicked top left");
  if((player == 1) && (box1[0] == undefined)) {
    topLeft.innerHTML = "X";
    box1.push(1);
    console.log("p1 chose box 1");
    turn();
  }
  else if ((player !== 1) && (box1[0] == undefined)) {
    topLeft.innerHTML = "O";
    box1.push(2);
    console.log("p2 chose box 1");
    turn();
  }
  roundNum++;
  checkWin();
};

topMid.onclick = function() {
  console.log("clicked top middle");
  if((player == 1) && (box2[0] == undefined)) {
    topMid.innerHTML = "X";
    box2.push(1);
    console.log("p1 chose box 2");
    turn();
  }
  else if((player !== 1) && (box2[0] == undefined)) {
    topMid.innerHTML = "O";
    box2.push(2);
    console.log("p2 chose box 2");
    turn();
  }
  roundNum++;
  checkWin();
};

topRight.onclick = function() {
  console.log("clicked top right");
  if((player == 1) && (box3[0] == undefined)) {
    topRight.innerHTML = "X";
    box3.push(1);
    console.log("p1 chose box 3");
    turn();
  }
  else if((player !== 1) && (box3[0] == undefined)) {
    topRight.innerHTML = "O";
    box3.push(2);
    console.log("p2 chose box 3");
    turn();
  }
  roundNum++;
  checkWin();
};

midLeft.onclick = function() {
  console.log("clicked middle left");
  if((player == 1) && (box4[0] == undefined)) {
    midLeft.innerHTML = "X";
    box4.push(1);
    console.log("p1 chose box 4");
    turn();
  }
  else if((player !== 1) && (box4[0] == undefined)) {
    midLeft.innerHTML = "O";
    box4.push(2);
    console.log("p2 chose box 4");
    turn();
  }
  roundNum++;
  checkWin();
  };

midMid.onclick = function() {
  console.log("clicked middle square");
  if((player == 1) && (box5[0] == undefined)) {
    midMid.innerHTML = "X";
    box5.push(1);
    console.log("p1 chose box 5");
    turn();
  }
  else if((player !== 1) && (box5[0] == undefined)) {
    midMid.innerHTML = "O";
    box5.push(2);
    console.log("p2 chose box 5");
    turn();
  }
  roundNum++;
  checkWin();
};

midRight.onclick = function() {
  console.log("clicked middle right");
  if((player == 1) && (box6[0] == undefined)) {
    midRight.innerHTML = "X";
    box6.push(1);
    console.log("p1 chose box 6");
    turn();
  }
  else if((player !== 1) && (box6[0] == undefined)) {
    midRight.innerHTML = "O";
    box6.push(2);
    console.log("p2 chose box 6");
    turn();
  }
  roundNum++;
  checkWin();
  
};

botLeft.onclick = function() {
  console.log("clicked bottom left");
  if((player == 1) && (box7[0] == undefined)) {
    botLeft.innerHTML = "X";
    box7.push(1);
    console.log("p1 chose box 7");
    turn();
  }
  else if((player !== 1) && (box7[0] == undefined)) {
    botLeft.innerHTML = "O";
    box7.push(2);
    console.log("p2 chose box 8");
    turn();
  }
  roundNum++;
  checkWin();
};

botMid.onclick = function() {
  console.log("clicked bottom middle");
  if((player == 1) && (box8[0] == undefined)) {
    botMid.innerHTML = "X";
    box8.push(1);
    console.log("p1 chose box 8");
    turn();
  }
  else if((player !== 1) && (box8[0] == undefined)) {
    botMid.innerHTML = "O";
    box8.push(2);
    console.log("p2 chose box 8");
    turn();

  }
  roundNum++;
  checkWin();
};

botRight.onclick = function() {
  console.log("clicked bottom right");
  if((player == 1) && (box9[0] == undefined)) {
    botRight.innerHTML = "X";
    box9.push(1);
    console.log("p1 chose box 9");
    turn();
  }
  else if((player !== 1) && (box9[0] == undefined)) {
    botRight.innerHTML = "O";
    box9.push(2);
    console.log("p2 chose box 9");
    turn();
  }
  roundNum++;
  checkWin();
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

// Game logic determines winner by checking if individual box arrays contain certain combinations
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
  // checks tie condition by comparing roundNum and game status.
  if((roundNum == 9) && (p1Won === false) && (p2Won === false)) {
    tie();
  }
} 
// gets incremented every time p1/p2Wins function runs. 

var p1WinTotal = 0;
var p2WinTotal = 0;

function p1Wins() {
  p1Won = true;
  alert("Player 1 Wins!");
  roundNum = 0;
  p1WinTotal++;
  clearBoxes();
  resetBoxes();
  p1Won = false;
  player = 1;
}

function p2Wins() {
  p2Won = true;
  alert("Player 2 Wins!");
  roundNum = 0;
  p2WinTotal++;
  clearBoxes();
  resetBoxes();
  p2Won = false;
 } 

 function tie() {
  alert("Tie!");
  clearBoxes();
  resetBoxes();
 }

// clears the score arrays
function clearBoxes() {
for(i = 0; i < allBoxes.length; i++) {
  allBoxes[i].pop();
  }
}
// clears the "X" and "O" HTML from board
function resetBoxes() {
  for(i=0; i < boxes.length; i++) {
    boxes[i].innerHTML = "&nbsp";
  }
 } 
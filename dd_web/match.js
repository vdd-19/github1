const gameContainer=document.getElementById("game")
const moveDisplay=document.getElementById("move")
const restartbtn=document.getElementById("restart")

let cardValues=[];
let first=null;
let second=null;
let lockBoard=false;
let moveCount=0;
let matchCount=0;

function initGame(){

    gameContainer.innerHTML=" ";
    moveCount=0;
    matchCount=0;
    moveDisplay.textContent="move: 0";
    first=null;
    second=null;
    lockBoard=false;

    const value=[1,2,3,4,5,6,7,8];
    cardValues=[...value,...value];
    suffleArray(cardValues)

}
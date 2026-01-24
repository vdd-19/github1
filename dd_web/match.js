//1.variable initialization
const gameContainer=document.getElementById("game");
const move=document.getElementById("moves");
const rebtn=document.getElementById("restart");

//2.card setup
let cardValues=["A","B","C","D","E","F","G","H"];
cardValues=[...cardValues, ...cardValues];

//3.game state var
let match=0;
let moves=0;
let flipcard=[];

//4.shuffle function
function shuffle(array){
  for(i=array.length-1;i>0;i--)
  {
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]==[array[j],array[i]];
  }
}

//5.board setup
function setupBoard(){
  shuffle(cardValues);
  gameContainer.innerHTML=" ";
  cardValues.forEach((val)=>{
    const card=document.createElement("div");
    card.classList.add("card");
    card.dataset.value=val;
    card.innerHTML=" ";
    card.addEventListener("click",()=>flippcard(card));
    gameContainer.appendChild(card);
  });


moves=0;
match=0;
move.innerHTML=`Moves: ${moves}`;
}

//6.card flipping logic
function flippcard(card){
  if(flipcard.length>=2||card.classList.contains("flipped")||card.classList.contains("matched")){
    return;
  }
card.classList.add("flipped");
card.innerHTML=card.dataset.value;
flipcard.push(card);

}

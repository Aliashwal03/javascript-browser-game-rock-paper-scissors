/*-------------------------------- Constants --------------------------------*/
const choices=['paper','rock', 'scissor']


/*-------------------------------- Variables --------------------------------*/
let msg
let playerChoice
let computerChoice



/*------------------------ Cached Element References ------------------------*/
const rockBtnEL =document.querySelector ('#rock')
const PapkBtnEL =document.querySelector ('#paper')
const ScikBtnEL =document.querySelector ('#scissor')
const resultDisplayElement=document.querySelector('#result-display')


/*-------------------------------- Functions --------------------------------*/
const getPlayerChoice = (event) => {
  playerChoice = event.target.id;
}
function getComputerChoice(){
    // generate a random number 0-2 
    const randomIndex= Math.floor(Math.random()*choices.length)
    // select the assciated item from the array
     return choices[randomIndex]
}

function play(event){
    computerChoice=getComputerChoice()
    getPlayerChoice(event);
    compare();
    render()
}

// update 
function render(){
    resultDisplayElement.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`
   
}
function compare(){
if (playerChoice===computerChoice){
    msg='you are tied'
}
else if(playerChoice==choices[2]&& computerChoice==choices[0]){
    msg=`player wins`
}
else if(playerChoice==choices[1]&& computerChoice==choices[2]){
    msg=`player wins`
}
else if(playerChoice==choices[0]&& computerChoice==choices[1]){
    msg=`player wins`
}
else{
    msg=`computer wins`
}

}

/*----------------------------- Event Listeners -----------------------------*/
rockBtnEL.addEventListener('click',play)
PapkBtnEL.addEventListener('click',play)
ScikBtnEL.addEventListener('click',play)
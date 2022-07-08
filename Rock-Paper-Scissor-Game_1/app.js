const computerChoiceDisplay=document.getElementById('computer-choice');
const userChoiceDisplay=document.getElementById('user-choice');
const result=document.getElementById('result');
 
//Now we want to get all possible results 
const possibleChoices=document.querySelectorAll('button');
// Now grabbing each button we want something to happen.
let userChoice;
possibleChoices.forEach(button => button.addEventListener('click', (e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
}));

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3);
    let computerChoice;
    switch(randomNumber){
        case 0:
            computerChoice='rock';
            break;
        case 1:
            computerChoice='paper';
            break;
        case 2:
            computerChoice='scissors';
            break;
    }
    computerChoiceDisplay.innerHTML=computerChoice;
    checkResult(userChoice,computerChoice);
}

function checkResult(userChoice,computerChoice){
    if(userChoice===computerChoice){
        result.innerHTML='It is a tie!';
    }else if(userChoice==='rock'){
        if(computerChoice==='scissors'){
            result.innerHTML='You win!';
        }else{
            result.innerHTML='You lose!';
        }
    }else if(userChoice==='paper'){
        if(computerChoice==='rock'){
            result.innerHTML='You win!';
        }else{
            result.innerHTML='You lose!';
        }
    }else if(userChoice==='scissors'){
        if(computerChoice==='paper'){
            result.innerHTML='You win!';
        }else{
            result.innerHTML='You lose!';
        }
    }
}
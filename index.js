
const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("your-choice")
const reslutDisplay= document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

let userChoice;


possibleChoices.forEach(button=>{
    button.addEventListener("click", (e)=>{
        
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice;
        generateResult();
        generateComputerChoice();
       
    })
})


let computerChoice;

let generateComputerChoice = () =>{
    let num = Math.floor(Math.random() * 3);
    let computerChoices = ["rock", "paper", "scissors"]
    
    computerChoice = computerChoices[num];
    computerChoiceDisplay.innerHTML = computerChoice

}

let result;
function generateResult() {

    if(userChoice === computerChoice){
        result = "it's a draw"
    }
    if (userChoice==="paper" && computerChoice ==="rock"){
        result = "You win!"
    }
    if (userChoice==="paper" && computerChoice ==="scissors"){
        result = "You lose!"
    }
    if (userChoice==="scissors" && computerChoice ==="paper"){
        result = "You win!"
    }
    if (userChoice==="scissors" && computerChoice ==="rock"){
        result = "You lose!"
    }
    if (userChoice==="rock" && computerChoice ==="paper"){
        result = "You lose!"
    }
    if (userChoice==="rock" && computerChoice === "scissors"){
        result = "You win!"
    }

    reslutDisplay.innerHTML = result

}



    
        





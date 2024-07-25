let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = 0;
let compScore = 0;

let userScorePara = document.querySelector("#user");
let compScorePara = document.querySelector("#comp");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () =>{
    console.log("game is draw");
    msg.innerText = "Game is Draw ! Play again";
    msg.style.backgroundColor = '#2B4162';
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win !");
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose !");
        msg.innerText = `You lost!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const playGame = (userChoice) =>{
    let compChoice = genCompChoice();
    console.log("User choice = ",userChoice);
    console.log("Computer choice = ",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
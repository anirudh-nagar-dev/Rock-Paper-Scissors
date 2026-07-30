let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#userscore");
let compScore = document.querySelector("#compscore");
let msg = document.querySelector("#msg");
 let userScoreVal = 0;
 let compScoreVal = 0;

let drawGame = () => {
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "orange";
}


let setScore = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScoreVal++;
        userScore.innerText = userScoreVal;
        msg.innerText = `Your ${userChoice} beats Computer's ${compChoice}.`;
        msg.style.backgroundColor = "green";

    }
    else{
        compScoreVal++;
        compScore.innerText = compScoreVal;
        msg.style.backgroundColor = "red";
        msg.innerText = `Computer's ${compChoice} beats Your ${userChoice}.`;
    }
}
    


    let playGame = (userChoice, compChoice) => {
    let userWin = true;
    if (userChoice === compChoice) {
        drawGame();
        return;
    }
    else if (userChoice==="rock"){
        userWin = compChoice === "scissors"? true : false;          
    }
    else if (userChoice==="paper"){
        userWin = compChoice === "rock"? true : false;          
    }
    else {
        userWin = compChoice === "paper"? true : false;
    }
    setScore(userWin, userChoice, compChoice);
}


let compChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id"); 
        let computerChoice = compChoice();
        playGame(userChoice, computerChoice);
    });
});

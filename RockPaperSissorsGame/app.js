 let userScore=0;
 let compScore=0;

 const choices = document.querySelectorAll(".choice");
 const message = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

 const genCompChoice = () => {
       const options = ["rock", "paper", "scissors"];
       const randIdx = Math.floor(Math.random()*3) ;
       return options[randIdx];
 };

 const drawGame = () => {
    console.log("game was draw");
    message.innerText="The game is draw";
    message.style.backgroundColor = "yellow";

 }

 const showWinner = (userWin ,userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        message.innerText = `You lost. Computer's ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor = "red";
    }
 };

 const playGame = (userChoice) => {
        console.log("user choice = ", userChoice);
        // Generate computer choice
        const compChoice = genCompChoice();
        console.log("comp choice= ", compChoice);

        if (userChoice === compChoice ){
            // draw game
            drawGame();
        } else{
            let userWin = true;
            if(userChoice === "rock"){
                // scissors, Paper
              userWin =  compChoice === "paper" ? false : true;

            }else if(userChoice === "paper") {
                // rock, scissors
              userWin=  compChoice === "scissors" ? false : true;
            }else {
                // rock , paper
               userWin= compChoice === "rock" ? false: true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
    };
 

 choices.forEach((choice) =>{
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
 });






let userScore = 0;
let botScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#bot-score");

const genCompChoice = () =>{
    const options = [ "rock" , "paper" , "scissors"];
    // rock , paper , scissors
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const showWinner = (userWin , userChoice ,  botChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!!");
        msg.innerText = `you win ! your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        botScore++;
        botScorePara.innerText = botScore;
        console.log("you lose!");
        msg.innerText = `you loose ! ${botChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const draw = () =>{
    console.log("the game was draw");
    msg.innerText = "game draw! , play again.";
    msg.style.backgroundColor = "#081b31";
}

const playGame =(userChoice) => {
    console.log("user choice is ", userChoice);
    //generate computer choice 
    const botChoice = genCompChoice();
    console.log("the computer choice is ", botChoice);
    if(userChoice === botChoice){
        //draw conditions
        draw();
    } else {
        userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = botChoice === "paper" ? false : true ;
        } else if (userChoice === "paper"){
            //rock , scissors 
            userWin = true;
            userWin = botChoice === "scissors" ? false :true;
        } else{
            userWin = botChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , botChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    })
})
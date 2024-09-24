function getComputerChoice() {
    let choice = ["rock", "scissor", "paper"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice() {
    return prompt("Choose! Rock, paper or scissors!").toLowerCase();
}

function playFiveRounds() {
    let humanScore = 0;
    let computerScore = 0;

    function playSingleRound() {
        let cChoice = getComputerChoice();
        let hChoice = getHumanChoice();
    
        if(cChoice == hChoice) {
            return "It`s a tie!"
        }
    
        if(cChoice == "rock") {
            if(hChoice == "scissors") {
                ++computerScore;;
                return "You lose!";
            }
            else {
                ++humanScore;
                return "You win!";
            }
        }
    
        if(cChoice == "paper") {
            if(hChoice == "rock") {
                ++computerScore;
                return "You lose!"
            }
            else {
                ++humanScore;
                return "You win!";
            }
        }
    
        // cChoice == scissors
        if(hChoice == "paper") {
            ++computerScore;
            return "You lose!";
        }   
        else {
            ++humanScore
            return "You win!";
        }
    
        return "No clue what happend, the it guy went to get some lunch";
    }

    while(humanScore < 5 && computerScore < 5) {
        const renderH = document.getElementById("hScore");
        const renderC = document.getElementById("cScore");

        renderH.textContent = humanScore;
        renderC.textContent = computerScore;

        console.log("Human : " + humanScore + "|| Computer : " + computerScore);
        console.log(playSingleRound());
    }

    const res = document.getElementById("result");

    if(humanScore > computerScore) {
        console.log("You win!");
        res.textContent = "You win!"
    }
    else if(humanScore < computerScore) {
        console.log("You lost!");
        res.textContent = "You lost!"
    }
    else {
        console.log("It`s a tie!");
        res.textContent = "It`s a tie!"
    }

}
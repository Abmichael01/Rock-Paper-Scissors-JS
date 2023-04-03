let playGame = confirm("Shall we play rock, paper or scissors");
if (playGame){
    let playerChoice = prompt("Enter rock, paper or scissors");
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
        let computerChoice = Math.floor(Math.random() * 3 + 1);
        let computer = 
        computerChoice === 1
        ? "rock"
        : computerChoice === 1
        ? "rock"
        : "scissors";

        let result = 
        playerOne === computer
        ? "Tie Game"
        : playerOne === "rock" && computer === "paper"
        ? "Computer Wins"
        : playerOne === "paper" && computer === "scissors"
        ? "Computer Wins"
        : playerOne === "scissors" && computer === "rock"
        ? "Computer Wins"
        : "PlayerOne wins"
        alert(result)
        
    }
}else{
    alert("ok maybe next time");
}


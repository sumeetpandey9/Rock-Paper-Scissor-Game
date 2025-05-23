let container = document.querySelector(".container");
let weaponBox = document.querySelector(".weapon-box");
let playerChoicesBox = document.querySelector(".player-choices");
let weapons = weaponBox.querySelectorAll(".weapons div");
let player = playerChoicesBox.querySelector(".player-choice img");
let computer = playerChoicesBox.querySelector(".computer-choice img")
let resultBox = container.querySelector(".result-box");
let resultText = resultBox.querySelector("h3");
let playAgainBtn = resultBox.querySelector("button");
let wonValueTxt = document.querySelector(".score-box .won h3 span");
let lostValueTxt = document.querySelector(".score-box .lost h3 span");
let drawValueTxt = document.querySelector(".score-box .draw h3 span");

let won = 0, lost = 0, draw = 0;

let computerChoices = ["Rock", "Paper", "Scissors"];

let outcomes = {
    RockRock: "Draw",
    RockPaper: "Computer",
    RockScissors: "Player",
    PaperRock: "Player",
    PaperPaper: "Draw",
    PaperScissors: "Computer",
    ScissorsRock: "Computer",
    ScissorsPaper: "Player",
    ScissorsScissors: "Draw",
}

for(let i = 0; i< weapons.length; i++) {
    weapons[i].addEventListener("click",(e) =>{

        player.src = "images/Rock.png";
        computer.src = "images/Rock.png";


        weaponBox.style.display = "none";
        playerChoicesBox.style.display = "block";


        setTimeout(()=>{
            playerChoicesBox.classList.add("active");
        },1000);

        setTimeout(()=>{
            let playerChoices = playerChoicesBox.querySelectorAll(".player-choices div");
            for(let i = 0; i< playerChoices.length; i++) {
                playerChoices[i].style.animationPlayState = "paused";
            }

            player.src = e.target.src;

            let randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
            computer.src = `./images/${randomChoice}.png`;

            let userChoice = e.target.parentElement.className;
            let outcomeValue = outcomes[userChoice+randomChoice];

            showResult(outcomeValue);

        }, 3000);


    })
}


let showResult = (result) =>{

    container.style.height = "460px";
    resultBox.style.display = "block";

    if(result === "Player"){
        resultText.innerHTML = "Congrats, You won! &#x1F389";
        won++;
        wonValueTxt.innerHTML = won;
        console.log(won);
    }else if(result === "Computer"){
        resultText.innerHTML = "Sorry, You lost! &#x1F62D";
        lost++;
        lostValueTxt.innerHTML = lost;
    }else if(result === "Draw"){
        resultText.innerHTML = "It's a Draw! &#x1F928";
        draw++;
        drawValueTxt.innerHTML = draw;
    }
}

playAgainBtn.addEventListener("click",()=>{
    playerChoicesBox.classList.remove("active");
    container.style.height = "380px";
    resultBox.style.display = "none";
    weaponBox.style.display = "block";
    playerChoicesBox.style.display = "none";

    let playerChoices = playerChoicesBox.querySelectorAll(".player-choices div");
    for(let i = 0; i< playerChoices.length; i++) {
        playerChoices[i].style.animationPlayState = "running";
    }

})
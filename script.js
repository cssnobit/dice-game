let diceImg = document.getElementById("valor-sorteado");
let points = document.getElementById("pontos");
points.textContent = 0;

let btnJogar = document.querySelector("button");
btnJogar.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 6) + 1;
    let userNumber = inputNumber();
    
    rollDice();
    
    setTimeout(() => {
        diceImg.src = `dice-faces/${random}.png`;
    }, 800);

    let winner = isWinner(userNumber, random);
    
    let message = (winner) ? 
    "Você ganhou!!!!" : "Você perdeu!";
    
    setTimeout(async () => {
        streak(winner);
        alert(message);
    }, 2000);

});

function inputNumber() {
    let valueChosen;
    while(true) {
        valueChosen = Number(prompt("Entre com um número de 1 a 6"));

        if(valueChosen >= 1 && valueChosen <= 6) {
            return valueChosen;
        } else if(!valueChosen) {
            return;
        }
        alert("Entrada inválida!");
    }
}

function streak(winner) {
    points.textContent = (winner) ? Number(points.textContent)+1 : 0;
}

function rollDice() {
    diceImg.src = "dice-faces/dice_roll.gif";
}

function isWinner(numChosen, drawn) {
    return (numChosen === drawn) ? true: false;
}
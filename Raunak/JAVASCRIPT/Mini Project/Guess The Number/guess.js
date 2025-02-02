const btn = document.getElementById("btn");

let randomNumber = Math.floor(Math.random() * 100+1);
let score = 100;

btn.addEventListener("click", function () {
  while (score > 0) {
    const userGuess = document.getElementById("guess").value;
    const guess = Number(userGuess);
    const result = document.getElementById("result");
    const scoreDisplay = document.getElementById("score");

    if (guess == randomNumber) {
      result.innerHTML = `You gueesed it right !! `;
      scoreDisplay.innerHTML = `Final Score : ${score}`;
      btn.disabled = true;
      break;

    } else if (guess > randomNumber) {
      result.innerHTML = `You guessed it high than the guess number ! `;
    
    } else if (guess < randomNumber) {
     result.innerHTML = `You guessed it low than the guess number ! `;
     
    }
        score -= 1;
        scoreDisplay.innerHTML = `Score : ${score} `;

        if (score<=0){
            result.innerHTML = `Game Over! The correct number was : ${randomNumber}`;
            btn.disabled = true;
            break;
        }
    return;
  }
});

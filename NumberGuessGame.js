function NumberGuessGame(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber);
    let message = document.createElement("p");
    let input = document.createElement("input");
    let button = document.createElement("button");
    button.textContent = "予想";
    message.textContent = "文字";
    button.addEventListener("click", function(){
        const userGuess = parseInt(input.value);
        const difference = Math.abs(userGuess - randomNumber);
        if (userGuess === randomNumber){
            message.textContent = "正解！";
        }
        else if (difference <= 5){
            message.textContent = "惜しい!あと少し大きいです";
        }
        else if (difference <= 10){
            message.textContent = "もっと大きい数字です";
        }
        else if (difference >= 5){
            message.textContent = "惜しい！あと少し小さいです";
        }
        else if (difference >= 10){
            message.textContent = "もっと小さい数字です";
        }
        })
    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(message);
}


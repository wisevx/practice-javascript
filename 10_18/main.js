const gameSelector = document.getElementById('game-selector');
const gameContainer = document.getElementById('game-container');

gameSelector.addEventListener("change", function(){
    gameContainer.innerHTML = "";
    switch(gameSelector.value){
        case "none":
            gameContainer.textContent = "ゲームを遊ぶとここに表示されます"
            break;
        case "click-counter":
            ClickCounterGame();
            break;
        case "number-guess":
            NumberGuessGame();
            break;
    }
})

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
        else if (difference <= 10){
            message.textContent = "もっと大きい数字です";
        }
        else if (difference <= 5){
            message.textContent = "惜しい!あと少し大きいです";
        }
        else if (difference >= 10){
            message.textContent = "もっと小さい数字です";
        }
        else if (difference >= 5){
            message.textContent = "惜しい！あと少し小さいです";
        }
        })
    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(message);
}

function ClickCounterGame(){
    let count = 0;

    let button1 = document.createElement("button"); //
    button1.textContent = "+1ボタン";

    let button2 = document.createElement("button");//
    button2.textContent = "+10ボタン";

    let counter = document.createElement("p");
    counter.textContent = count;

        button1.addEventListener("click",function(){ //increase 1
        count++;
        counter.textContent = count;
    })
    button2.addEventListener("click",function(){ //increase 10
        count=count+10;
        counter.textContent = count;
    })
    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(counter);
}
ClickCounterGame();
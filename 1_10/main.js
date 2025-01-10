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
        case "rps":
            RPS();
            break;

    }
})
let cardz = []
let sum = 0
let foundBlackJack = false
let stillGaming = false
let message = ""
let startMessage = document.querySelector("#startMessage")
let sumCards = document.querySelector("#sumCards")
let cardsPicked = document.querySelector("#cardsPicked")
let gameOver = document.querySelector("#gameOver")
let coinsAdded = document.querySelector("#coinsAdded")
let player1Cards = document.querySelector("#player1Cards")
let player1Sum = document.querySelector("#player1Sum")
let coinsToAdd = 0
let player = {
    name: "mike",
    coins: 0
}
let aboutPlayer = document.getElementById("aboutPlayer")

aboutPlayer.textContent = player.name //+": $"+ player.coins

function getRandomCard(params) {
    let randomCardNum = Math.floor(Math.random()*13) + 1
    if (randomCardNum > 10) {
        return 10
    } else if(randomCardNum === 1) {
        return 11
    } else {
        return randomCardNum
    }
}

function startBlackJack(params) {
    cardz.splice(0)
    stillGaming = true
    if (stillGaming === true) {
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cardz.push(firstCard)
        cardz.push(secondCard)
        sum = cardz[0] + cardz[1]
        renderGame();
    }
    document.querySelector("#startBlackjackbtn").style.display = "none"
    document.querySelector("#newCardbtn").style.display = "inline-block"
}
function addCoins(params) {
    // coinsToAdd += 10
    player.coins += 10
    coinsAdded.textContent = player.coins
}
function renderGame(params) {
    cardsPicked.textContent = " "
    for (let i = 0; i < cardz.length; i++) {
        cardsPicked.textContent += cardz[i] +" "
        
    }
    sumCards.textContent = sum
    if (sum <= 20) {
        message = ("Lukcy! Draw another card.")
        stillGaming = true
        foundBlackJack = false
        console.log(message)
        startMessage.textContent = message
    } else if(sum === 21) {
        addCoins()
        message = ("Win!!! You've found the Blackjack.")
        // player.coins += 10
        document.getElementById("startMessage").style.color = "yellow"
        document.getElementById("saveCardbtn").style.display = "inline-block"
        document.getElementById("newCardbtn").style.display = "none"
        foundBlackJack = true
        startMessage.textContent = message
    } else if(sum >= 22){
        message = ("Sorry, the Blackjack game is over.")
        // addCoins()
        document.getElementById("startMessage").style.color = "white"
        gameOver.textContent = "Game Over!"
        document.getElementById("saveCardbtn").style.display = "inline-block"
        document.querySelector("#newCardbtn").style.display = "none"
        stillGaming = false
        foundBlackJack = false
        startMessage.textContent = message
    }
}


function drawCard(params) {
    // addCoins()
    if (stillGaming === true && foundBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cardz.push(card)
    renderGame();   
    }
}
let listCards = ""
function saveCards(params) {
    for (let i = 0; i < cardz.length; i++) {
        // player1Cards.innerHTML +=  cardz[i]// +"<br>"
        // player1Sum.innerHTML = sum +"<br>"
        listCards += `<li>
                            ${cardz[i]}
                    </li>`
    }
    player1Cards.innerHTML = listCards += sum
    document.getElementById("saveCardbtn").style.display = "none"
    document.getElementById("newCardbtn").style.display = "none"
    gameOver.textContent = ""
    startMessage.style.color = "blue"
    startMessage.textContent = "Start a new game below."
    document.getElementById("continueNewGamebtn").style.display = "inline-block"
}

function continueNewGame(params) {
    cardz.splice(0)
    cardsPicked.textContent = ""
    sumCards.textContent = ""
    document.getElementById("continueNewGamebtn").style.display = "none"
    document.getElementById("saveCardbtn").style.display = "none"
    document.getElementById("startBlackjackbtn").style.display = "inline-block"
    // location.href = location.href
}
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// from index 1 remove 2 and insert one
const removed = myFish.splice(1,2,"one");
// const removed = myFish.splice(0);

console.log(myFish)
// removed is ["mandarin", "sturgeon"]

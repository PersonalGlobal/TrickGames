window.addEventListener("load" , initGame)
const mapGame = document.getElementById("game-map")
const dashboard = document.getElementById("game-dashboard")
const resultGame = document.getElementById("result-game")

function initGame(){
    console.log("Init Game")
    mapGame.style.display = "none"
    dashboard.style.display = "none"
    resultGame.style.display = "none"
}
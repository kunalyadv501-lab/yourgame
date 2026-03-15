let highScore = localStorage.getItem("highscore") || 0
let player = document.getElementById("player")
let enemy1 = document.getElementById("enemy1")
let enemy2 = document.getElementById("enemy2")
let score = document.getElementById("score")

let playerX = 170
let speed = 5
let points = 0

document.addEventListener("keydown", function(e){

if(e.key === "ArrowLeft"){
playerX -= 100
if(playerX < 70) playerX = 70
player.style.left = playerX + "px"
}

if(e.key === "ArrowRight"){
playerX += 100
if(playerX > 270) playerX = 270
player.style.left = playerX + "px"
}

})
let enemy1Y = 0
let enemy2Y = -300

function moveCars(){

enemy1Y += speed
enemy2Y += speed

enemy1.style.top = enemy1Y + "px"
enemy2.style.top = enemy2Y + "px"

if(enemy1Y > 600){
enemy1Y = -200
points++
}

if(enemy2Y > 600){
enemy2Y = -400
points++
}

score.innerHTML = "Score: " + points

}
let playerLeft = player.offsetLeft
let enemy1Left = enemy1.offsetLeft
let enemy2Left = enemy2.offsetLeft

if(
(enemy1Y > 500 && playerLeft === enemy1Left) ||
(enemy2Y > 500 && playerLeft === enemy2Left)
){
alert("Game Over! Score: " + points)
location.reload()
}
if(points % 10 === 0){
speed += 1
}
if(points > highScore){
localStorage.setItem("highscore", points)
}
document.getElementById("leftBtn").onclick = function(){
playerX -= 100
if(playerX < 70) playerX = 70
player.style.left = playerX + "px"
}

document.getElementById("rightBtn").onclick = function(){
playerX += 100
if(playerX > 270) playerX = 270
player.style.left = playerX + "px"
}

setInterval(moveCars,50)

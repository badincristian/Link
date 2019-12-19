var startButton = document.querySelector("input");
var speed = 2000;
startButton.addEventListener("click", start);
window.addEventListener ( "keypress", keyPressed);
function start() {
    startButton.style.display = "none";
    newLetter();

}
function keyPressed(event){
    var letter = event.key;
    div = document.querySelector("."+ letter);
    document.querySelector("body").removeChild(div);
}

function newLetter() {
    var letter = randomLetter();
    var x = randomPosition();
    var y = randomPosition();
    var div = document.createElement("div");
    div.innerText = letter;
    div.style.top = y;
    div.style.left = x;
    div.className = "boxLetter " + letter;
    document.querySelector("body").appendChild(div);
    setTimeout(newLetter, speed);
}
function randomLetter() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var pos = randomNumber(letters.length);
    return letters.charAt(pos);
}
function randomPosition() {
    return randomNumber(95) + "%";
    // console.log(randomPosition)
}
function randomNumber(max) {
    return Math.round (Math.random () * max);
}
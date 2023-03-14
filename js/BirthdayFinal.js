let chain = document.getElementById('chain')
chain.addEventListener('click',musicPlay);
function musicPlay(){
let audio = new Audio("chain.mp3");
audio.play();
document.getElementById("playM").style.display = 'none';
let stars = document.getElementById('stars');
stars.style.animation = "animateBg 50s linear 8";
stars.style.animationDelay = "179s";
let one = document.getElementById('onespan')
let two = document.getElementById('twospan')
let three = document.getElementById('threespan')
let four = document.getElementById('fourspan')
let five = document.getElementById('fivespan')
let six = document.getElementById('sixspan')
let seven = document.getElementById('sevenspan')
let eight = document.getElementById('eightspan')
let nine = document.getElementById('ninespan')
let ten = document.getElementById('tenspan')
one.style.animation = "animate 3s linear 6";
two.style.animation = "animate 3s linear 6";
three.style.animation = "animate 3s linear 6";
four.style.animation = "animate 3s linear 6";
five.style.animation = "animate 3s linear 6";
six.style.animation = "animate 3s linear 6";
seven.style.animation = "animate 3s linear 6";
eight.style.animation = "animate 3s linear 6";
nine.style.animation = "animate 3s linear 6";
ten.style.animation = "animate 3s linear 6";
one.style.animationDelay = "179s";
two.style.animationDelay = "179.2s";
three.style.animationDelay = "179.4s";
four.style.animationDelay = "179.6s";
five.style.animationDelay = "179.8s";
six.style.animationDelay = "180s";
seven.style.animationDelay = "180s";
eight.style.animationDelay = "180.4s";
nine.style.animationDelay = "179.75s";
ten.style.animationDelay = "181.75s";
one.style.animationDuration = "1s";
two.style.animationDuration = "3s";
three.style.animationDuration = "2s";
four.style.animationDuration = "1.5s";
five.style.animationDuration = "2.5s";
six.style.animationDuration = "3s";
seven.style.animationDuration = "1.75s";
eight.style.animationDuration = "1.25s";
nine.style.animationDuration = "1.5s";
ten.style.animationDuration = "2.25s";
}


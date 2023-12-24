var s1 = document.getElementById("num1");
var s2 = document.getElementById("num2");
const hand = document.getElementById("hand");
var phand = document.getElementById("paperhand");

const left = document.querySelector("#left");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var com = document.getElementById("hand2");
var phand2 = document.getElementById("paperhand2");

var won = document.getElementById("won");
var wons = document.getElementById("wons");
var playagain = document.getElementById("playagain");

var cScore = 0;
var pScore = 0;
s1.textContent = pScore;
s2.textContent = cScore;

function randomise() {
    operators = Math.round(Math.floor(Math.random() * 3));
    if (operators === 2) {
        phand2.src = "./assets/" + rock.id + "-hand.png";
    } else if (operators === 0) {
        phand2.src = "./assets/" + paper.id + "-hand.png";
    }

   
    if (pChoice === "paper") {
        if (operators === 2) {
            pScore = pScore + 1;
            s1.textContent = pScore;
        } else if (operators === 0) {
            cScore = cScore + 1;
            s2.textContent = cScore;
        }
    } else if (pChoice === "rock") {
        if (operators === 1) {
            cScore = cScore + 1;
            s2.textContent = cScore;
        } else if (operators === 0) {
            pScore = pScore + 1;
            s1.textContent = pScore;
        }
    } else if (pChoice === "scissors") {
        if (operators === 2) {
            cScore = cScore + 1;
            s2.textContent = cScore;
        } else if (operators === 1) {
            pScore = pScore + 1;
            s1.textContent = pScore;
        }
    }

  
    if (pScore === 5 || cScore === 5) {
        var buttons = document.getElementsByClassName("buttons");
        won.style.visibility = "visible";
        wons.innerHTML = pScore === 5 ? "Won" : "Lose";
        playagain.style.visibility = "visible";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "hidden";
        }
    }
}


var buttons = left.querySelectorAll("img");

buttons.forEach(function (img) {
    img.onclick = function (e) {
        if (e.target.matches("img")) {
            phand.src = "./assets/" + e.target.id + "-hand.png";
            pChoice = e.target.id;
            randomise();
        }
    };
});

playagain.onclick = () => {
    location.href = "./index.html";
};

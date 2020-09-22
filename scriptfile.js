var randomNumber1 = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll("img")[0].setAttribute("src", "dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll("img")[1].setAttribute("src", "dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  var x = "🚩 Player 1 wins!";
  document.querySelector("h1").innerHTML = x;
} else if (randomNumber1 < randomNumber2) {
  var x = "Player 2 wins! 🚩";
  document.querySelector("h1").innerHTML = x;
} else {
  var x = "Draw!";
  document.querySelector("h1").innerHTML = x;
}

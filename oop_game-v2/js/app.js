/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
let game;

document.getElementById("btn__reset").addEventListener("click", () => {
  document.querySelector("#phrase > ul").innerHTML = "";
  const keys = document.querySelectorAll(".key");
  for (let key of keys) {
    key.removeAttribute("disabled");
    key.classList.remove("chosen", "wrong");
  }
  const lives = document.querySelectorAll(".tries > img");
  for (let live of lives) {
    live.src = "images/liveHeart.png";
  }
  game = new Game();
  game.startGame();
});
const qwerty = document.getElementById("qwerty");
qwerty.addEventListener("click", () => {
  if (event.target.tagName === "BUTTON") {
    game.handleInteraction(event.target);
  }
});
document.addEventListener("keydown", () => {
  const keys = document.querySelectorAll(".key");
  for (let key of keys) {
    if(key.textContent === event.key) {
      game.handleInteraction(key);
    }
  }
 console.log(event.key);
});
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Start and reset button handler
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

// handleInteraction handler
const qwerty = document.getElementById("qwerty");
qwerty.addEventListener("click", () => {
  if (event.target.tagName === "BUTTON") {
    game.handleInteraction(event.target);
  }
});

// keyboard handler, to handle associated onscreen buttons with the keys on the keyboard
document.addEventListener("keydown", () => {
  const keys = document.querySelectorAll(".key");
  for (let key of keys) {
    if(key.textContent === event.key) {
      game.handleInteraction(key);
    }
  }
});
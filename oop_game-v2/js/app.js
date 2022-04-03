/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
let game;

document.getElementById("btn__reset").addEventListener("click", () => {
  game = new Game();
  game.startGame();  
});

/**
 * Now it’s time to start adding some user interaction to the game. When a user clicks on one of
the onscreen keyboard buttons, several things need to happen:
● The clicked/chosen letter must be captured.
● The clicked letter must be checked against the phrase for a match.
● If there’s a match, the letter must be displayed on screen instead of the placeholder.
● If there’s no match, the game must remove a life from the scoreboard.
● The game should check if the player has won the game by revealing all of the letters in
the phrase or if the game is lost because the player is out of lives.
● If the game is won or lost, a message should be displayed on screen.
 */
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Hello World"),
      new Phrase("To the infinity and the end"),
      new Phrase("Say Hello to my little friend"),
      new Phrase("Praise the Sun"),
      new Phrase("Vae victis"),
      new Phrase("I love programming"),
    ];
    this.activePhrase = null;
  }
  /**
   * Selects random phrase from phrases property
   * @return {object} Phrase pbject chosen to be used
   */
  getRandomPhrase() {
    const randomPhrase =
      this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return randomPhrase;
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.getElementById("overlay").style.display = "none";
    const phrase = this.getRandomPhrase();
    this.activePhrase = phrase;
    return this.activePhrase.addPhraseToDisplay();
  }
  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false otherwise
   */
  checkForWin() {
    const allLettersCount = document.querySelectorAll(".letter").length;
    const ShowedLettersCount = document.getElementsByClassName("show").length;
    if (allLettersCount == ShowedLettersCount) {
      this.gameOver(true);
      return true;
    } else {
      return false;
    }
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    // const tries = document.getElementsByClassName('tries');
    const tries = document.querySelectorAll(".tries > img");
    for (let i = 0; i <= this.missed; i++) {
      tries[i].src = "images/lostHeart.png";
    }
    this.missed++;
    if (this.missed == 5) {
      this.gameOver(false);
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "";
    if (gameWon == true) {
      overlay.classList.remove("start", "lose");
      overlay.classList.add("win");
      document.getElementById("game-over-message").textContent = "You Win!";
    }
    if (gameWon == false) {
      overlay.classList.remove("start", "win");
      overlay.classList.add("lose");
      document.getElementById("game-over-message").textContent = "You lose!";
    }
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param {HTMLButtonElement} button - The clicked button element
   */
  handleInteraction(button) {
    button.setAttribute("disabled", "");
    if (this.activePhrase.checkLetter(button.textContent)) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);
      this.checkForWin();
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }
  }
}
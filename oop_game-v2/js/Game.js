/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Hello World"),
      new Phrase("To the infinity and the end"),
      new Phrase("El mejor pais de Chile"),
      new Phrase("Praise the Sun"),
      new Phrase("Vae victis"),
    ];
    this.activePhrase = null;
  }
  /**
   * Selects random phrase from phrases property
   * @return {object} Phrase pbject chosen to be used
   */
  getRandomPhrase() {
      const randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
      return randomPhrase;
  };
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
      document.getElementById('overlay').style.display = 'none';
      const phrase = this.getRandomPhrase();
      this.activePhrase = phrase;
      return phrase.addPhraseToDisplay();      
  };
  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false otherwise
   */
  checkForWin() {
    const allLettersCount = document.querySelectorAll(".letter").length;
    const ShowedLettersCount = document.getElementsByClassName('show').length; 
    return (allLettersCount == ShowedLettersCount) ? true : false;
  };
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    // const tries = document.getElementsByClassName('tries');
    const tries = document.querySelectorAll('.tries > img');
    for(let i = 0; i <= this.missed; i++ ) {
      tries[i].src = 'images/lostHeart.png'
    }    
    this.missed == 5 ? this.gameOver() : this.missed ++;   
  };
  /**
   * Displays game over message
   * @param {boolean} gameWon - whether or not the user won the game
   */
  gameOver(gameWon) {};

  handleInteraction() {
    const qwerty = document.querySelectorAll('qwerty');
    const keys = document.querySelectorAll(".key");
    const letters = document.querySelectorAll(".letter");
    qwerty.addEventListener('click', () => {
      const selectedKey = event.target;      
      selectedKey.setAttribute('disabled', '');
      for (const letter of letters) {
        if (selectedKey.textContent === letter.textContent) {
          console.log('is a match!');
          selectedKey.classList.add('chosen');
        } else if (selectedKey.textContent !== letter.textContent) {
          console.log('Popo!');
          selectedKey.classList.add('wrong');
        }
      }     
    });   
  };  
}

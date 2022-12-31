/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseSectionUl = document.getElementById("phrase").firstElementChild;
    for (let i = 0; i < this.phrase.length; i++) {
      let li;
      if (this.phrase[i] === " ") {
        li = `<li class="space"> </li>`;
      } else {
        li = `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      }
      phraseSectionUl.insertAdjacentHTML("beforeend", li);
    }
  }
  /**
   * Checks if passed letter is in phrase
   * @param {string} letter - letter to check
   */
  checkLetter(letter) {
    const characters = document.querySelectorAll(".letter");
    let isMatch = false;
    for (const char of characters) {
      if (char.textContent === letter) {
        isMatch = true;
      }
    }
    return isMatch;
  }
  /**
   * Displays passed letter on screen after a match is found
   * @param {string} letter - letter to check
   */
  showMatchedLetter(letter) {
    const characters = document.querySelectorAll(".letter");
    for (const char of characters) {
      if (char.textContent === letter) {
        char.classList.remove("hidden");
        char.classList.add("show");
      }
    }
  }
}

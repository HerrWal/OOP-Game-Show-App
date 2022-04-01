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
    this.activatePhrase = null;
  }
  /**
   * Selects random phrase from phrases property
   * @return {object} Phrase pbject chosen to be used
   */
  getRandomPhrase() {
      const randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
      return randomPhrase;
  };
}

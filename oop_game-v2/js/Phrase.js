/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();        
    }
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const phraseSectionUl = document.getElementById('phrase').firstElementChild;        
        for (let i = 0; i < this.phrase.length; i++ ) {
            let li;            
            if (this.phrase[i] === ' ') {
                li = `<li class="space"> </li>`;
            } else {
                li = `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
            phraseSectionUl.insertAdjacentHTML('beforeend', li);                       
        }                
    }
    /**
     * checkLetter() method
     */
    checkedLetter() {}
    /**
     * showMatchedLetter()
     */
    showMatchedLetter() {}
}
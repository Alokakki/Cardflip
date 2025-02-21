import { generateCards } from './cardData.js';

class CardGame {
  constructor() {
    this.cards = generateCards();
    this.currentCard = null;
    this.isFlipped = false;
    
    this.showButton = document.getElementById('showCard');
    this.cardContainer = document.getElementById('cardContainer');
    this.remainingText = document.getElementById('remaining');
    this.cardElement = document.querySelector('.card');
    
    this.showButton.addEventListener('click', () => this.showNextCard());
    this.cardElement.addEventListener('click', () => this.flipCard());
    
    this.updateRemainingText();
    this.hideCard();
  }
  
  showNextCard() {
    if (this.cards.length === 0) {
      this.remainingText.textContent = 'No cards remaining!';
      this.hideCard();
      return;
    }
    
    this.isFlipped = false;
    this.cardElement.classList.remove('flipped');
    
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    this.currentCard = this.cards[randomIndex];
    this.cards.splice(randomIndex, 1);
    
    const frontSvg = this.currentCard.frontSvg;
    const backContent = this.currentCard.backContent;
    
    const frontElement = this.cardElement.querySelector('.card-front');
    const backElement = this.cardElement.querySelector('.card-back');
    
    frontElement.innerHTML = frontSvg;
    backElement.innerHTML = backContent;
    
    this.cardElement.style.display = 'block';
    this.showButton.disabled = true;
    this.updateRemainingText();
  }
  
  flipCard() {
    if (!this.currentCard || this.isFlipped) return;
    
    this.isFlipped = true;
    this.cardElement.classList.add('flipped');
    this.showButton.disabled = false;
  }
  
  hideCard() {
    this.cardElement.style.display = 'none';
    this.showButton.disabled = false;
  }
  
  updateRemainingText() {
    this.remainingText.textContent = Cards remaining: ${this.cards.length};
  }
}

new CardGame();

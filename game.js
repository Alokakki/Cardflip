import { generateCards } from './cardData.js';

class CardGame {
  constructor() {
    this.cards = this.shuffleArray(generateCards()).slice(0, 21); // Get only 21 images
    this.currentCard = null;
    this.isFlipped = false;

    this.showButton = document.getElementById('showCard');
    this.cardContainer = document.getElementById('cardContainer');
    this.remainingText = document.getElementById('remaining');
    this.cardElement = document.querySelector('.card');

    if (this.showButton) {
      this.showButton.addEventListener('click', () => this.showNextCard());
    }

    if (this.cardElement) {
      this.cardElement.addEventListener('click', () => this.flipCard());
    }

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
    this.currentCard = this.cards.splice(randomIndex, 1)[0]; // Remove selected card

    if (!this.cardElement) return;

    const frontElement = this.cardElement.querySelector('.card-front');
    const backElement = this.cardElement.querySelector('.card-back');

    frontElement.innerHTML = this.currentCard.frontSvg;
    backElement.innerHTML = this.currentCard.backContent;

    this.cardElement.style.display = 'block';
    this.showButton.disabled = this.cards.length === 0; // Disable only if no cards remain
    this.updateRemainingText();
  }

  flipCard() {
    if (!this.currentCard || this.isFlipped) return;

    this.isFlipped = true;
    this.cardElement.classList.add('flipped');
    this.showButton.disabled = false;
  }

  hideCard() {
    if (this.cardElement) {
      this.cardElement.style.display = 'none';
    }
    this.showButton.disabled = false;
  }

  updateRemainingText() {
    this.remainingText.textContent = `Cards remaining: ${this.cards.length}`;
  }

  // Helper function to shuffle cards randomly
  shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
}

document.addEventListener('DOMContentLoaded', () => new CardGame());

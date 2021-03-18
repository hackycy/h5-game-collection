class MemoryGame {

  constructor() {
    this.duration = 1000;
    this.cardsContainer = document.querySelector('.js-cards');
    this.cards = Array.from(this.cardsContainer.children);
  }

  shuffleCards() {
    this.cards.forEach(card => {
      const randomNumber = Math.floor(Math.random() * this.cards.length) + 1;

      card.classList.remove('has-match');

      setTimeout(() => {
        card.style.order = `${randomNumber}`;
      }, 400);
    });
  }

  checkAllCards() {
    if (this.cards.every(card => card.classList.contains('has-match'))) {
      setTimeout(() => {
        this.shuffleCards();
      }, this.duration);
    }
  }

  stopEvent() {
    this.cardsContainer.classList.add('no-event');

    setTimeout(() => {
      this.cardsContainer.classList.remove('no-event');
    }, this.duration);
  }

  checkIfMatched(firstCard, secondCard) {
    if (firstCard.dataset.animal === secondCard.dataset.animal) {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');

      firstCard.classList.add('has-match');
      secondCard.classList.add('has-match');

      this.checkAllCards();
    } else {
      setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
      }, this.duration);
    }
  }

  flip(selectedCard) {
    selectedCard.classList.add('flipped');

    const flippedCards = this.cards.filter(card => card.classList.contains('flipped'));

    if (flippedCards.length === 2) {
      this.stopEvent();
      this.checkIfMatched(flippedCards[0], flippedCards[1]);
    }
  }}



const game = new MemoryGame();

Array.from(document.querySelectorAll('.js-card')).forEach(card => {
  card.addEventListener('click', game.flip.bind(game, card));
});
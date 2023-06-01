import speakersData from './data.js';
import template from './template.js';

export default function populateCards() {
  const colContainer = document.querySelector('.col');
  const showMoreButton = document.querySelector('.btn-show');

  let initialCardCount = window.innerWidth > 768 ? 6 : 2;
  let currentCardCount = initialCardCount;

  const populateCards = () => {
    colContainer.innerHTML = '';
    const colAContainer = document.createElement('div');
    colAContainer.classList.add('col-A');
    colContainer.appendChild(colAContainer);

    const colBContainer = document.createElement('div');
    colBContainer.classList.add('col-B');
    colContainer.appendChild(colBContainer);

    for (let i = 0; i < currentCardCount && i < speakersData.length; i += 1) {
      const speaker = speakersData[i];
      const cardSpeaker = document.createElement('div');
      cardSpeaker.classList.add('card-speaker');
      cardSpeaker.innerHTML = template(speaker);

      if (i % 2 === 0) {
        colAContainer.appendChild(cardSpeaker);
      } else {
        colBContainer.appendChild(cardSpeaker);
      }
    }
  };

  const handleShowMore = () => {
    if (showMoreButton.textContent === 'SHOW MORE CARDS >') {
      currentCardCount = speakersData.length;
      showMoreButton.textContent = 'SHOW LESS';
    } else {
      currentCardCount = initialCardCount;
      showMoreButton.textContent = 'SHOW MORE CARDS >';
    }

    populateCards();
  };

  const handleResize = () => {
    initialCardCount = window.innerWidth > 768 ? 6 : 2;
    currentCardCount = initialCardCount;
    populateCards();
  };

  showMoreButton.addEventListener('click', handleShowMore);
  window.addEventListener('resize', handleResize);

  populateCards();
}

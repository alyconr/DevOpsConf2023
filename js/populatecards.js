import speakersData from './data.js';
import template from './template.js';

export default function populateCards() {
  const speakersContainer = document.querySelector('.col');

  const colA = document.createElement('div');
  colA.classList.add('col-A');
  const colB = document.createElement('div');
  colB.classList.add('col-B');

  speakersData.forEach((speaker, index) => {
    const cardSpeaker = document.createElement('div');
    cardSpeaker.classList.add('card-speaker');
    cardSpeaker.innerHTML = template(speaker);

    if (index < 3) {
      colA.appendChild(cardSpeaker);
    } else {
      colB.appendChild(cardSpeaker);
    }
  });
  speakersContainer.appendChild(colA);
  speakersContainer.appendChild(colB);
}

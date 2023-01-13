import './style.css'

const buttonCat = document.getElementById('random-cat');
const buttonDog = document.getElementById('random-dog');
const boardImage = document.getElementById('board-image');
const boardMessage = document.getElementById('board-message');
const buttonSurprise = document.getElementById('random-surprise');

buttonDog.addEventListener('click', () => {
  boardMessage.style.display = 'none';
  const DOGAPI = 'https://dog.ceo/api/breeds/image/random';
  fetch(DOGAPI)
  .then((response) => response.json())
  .then((data) => {
    boardImage.src = data.message;
  });
});

buttonCat.addEventListener('click', () => {
  console.log(boardMessage);
  boardMessage.style.display = 'none';
  const CATAPI = 'https://aws.random.cat/meow';
  fetch(CATAPI)
  .then((response) => response.json())
  .then((data) => {
    boardImage.src = data.file;
  });
});
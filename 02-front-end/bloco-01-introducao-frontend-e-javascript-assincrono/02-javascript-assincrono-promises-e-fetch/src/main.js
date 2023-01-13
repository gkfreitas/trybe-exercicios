const heroImg = document.getElementById('card-hero');
const heroName = document.getElementById('superhero-name');
const buttonRaffle = (document.getElementById('raffle'));

buttonRaffle.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 732 + 1);
  const SUPERHERO_API = `https://www.superheroapi.com/api.php/2824050907726908/${randomNumber}`;
  fetch(SUPERHERO_API)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.image.url);
    heroImg.style.backgroundImage = `url('${data.image.url}')`;
    heroName.innerText = data.name
  }); 
});
const buttonBackground = document.getElementById('option-background-color');
const buttonColor = document.getElementById('option-color');
const buttonFontSize = document.getElementById('option-font-size');
const buttonLineHeight = document.getElementById('option-line-height');
const buttonFontFamily = document.getElementById('option-font-family')
const text = document.getElementById('important-text');

buttonBackground.addEventListener("click", (event) => {
  const eventTarget = event.target;
  const eventValue = eventTarget.innerHTML;
  const backgroundColor = text.style.backgroundColor;
  text.style.backgroundColor = eventValue
  localStorage.setItem('backgroundColor', JSON.stringify(eventValue));
});

console.log(localStorage.getItem('backgroundColor'));

buttonColor.addEventListener("click", (event) => {
  const eventTarget = event.target;
  const eventValue = eventTarget.innerHTML;
  text.style.color = eventValue;
  localStorage.setItem('color', JSON.stringify(eventValue));
});

buttonFontSize.addEventListener("click", (event) => {
  const eventTarget = event.target;
  const eventValue = eventTarget.innerHTML;
  text.style.fontSize = eventValue;
  localStorage.setItem('fontSize', JSON.stringify(eventValue));
});

buttonLineHeight.addEventListener("click", (event) => {
  const eventTarget = event.target;
  const eventValue = eventTarget.innerHTML;
  text.style.lineHeight = eventValue;
  localStorage.setItem('lineHeight', JSON.stringify(eventValue));
});

buttonFontFamily.addEventListener("click", (event) => {
  const eventTarget = event.target;
  const eventValue = eventTarget.innerHTML;
  text.style.fontFamily = eventValue;
  localStorage.setItem('fontFamily', JSON.stringify(eventValue));
  
});

const clearFilter = document.getElementById('clear-filter');
clearFilter.addEventListener("click", () => {
  text.style.backgroundColor =  'initial';
  text.style.color = 'initial';
  text.style.fontSize = 'initial';
  text.style.lineHeight = 'initial';
  text.style.fontFamily = 'initial';
  localStorage.setItem('backgroundColor','initial');
  localStorage.setItem('color', 'initial');
  localStorage.setItem('fontSize', 'initial');
  localStorage.setItem('lineHeight', 'initial');
  localStorage.setItem('fontFamily', 'initial');
});

window.onload = function() {
  text.style.backgroundColor = JSON.parse(localStorage.getItem('backgroundColor'));
  text.style.color = JSON.parse(localStorage.getItem('color'));
  text.style.fontSize = JSON.parse(localStorage.getItem('fontSize'));
  text.style.lineHeight = JSON.parse(localStorage.getItem('lineHeight'));
  text.style.fontFamily = JSON.parse(localStorage.getItem('fontFamily'));
}

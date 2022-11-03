const buttonBackground = document.getElementById('option-background-color');
const buttonColor = document.getElementById('option-color');
const buttonFontSize = document.getElementById('option-font-size');
const buttonLineHeight = document.getElementById('option-line-height');
const buttonFontFamily = document.getElementById('option-font-family')
const text = document.getElementById('important-text');

buttonBackground.addEventListener("click", (event) => {
  const eventTarget = event.target;
  const eventValue = eventTarget.innerHTML;
  text.style.backgroundColor = eventValue;
});





// for (i = 0; i < button.length; i += 1) {
//   for (i2 = 0;  i2 < button[i].children.length; i2 += 1) {
//     console.log(button[i].children[i2].innerHTML);
//   }
// }

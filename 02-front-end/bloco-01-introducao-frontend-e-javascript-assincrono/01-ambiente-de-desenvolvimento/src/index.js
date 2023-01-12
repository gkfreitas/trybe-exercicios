import { nanoid } from 'nanoid';

const buttonGenerator = document.querySelector('button');
const passwordText = document.querySelector('h2');

buttonGenerator.addEventListener('click', () => {
    const randomPassword = nanoid();
    passwordText.innerHTML = randomPassword;
});
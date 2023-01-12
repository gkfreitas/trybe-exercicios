import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const buttonGenerator = document.querySelector('button');
const passwordText = document.querySelector('h2');

buttonGenerator.addEventListener('click', () => {
    const randomPassword = nanoid();
    passwordText.innerHTML = randomPassword;
    copy(randomPassword);
});

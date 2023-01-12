import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
let usersData;
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => fillUsersSelect(data.users));

usersSelect.addEventListener('change', () => {
  clearPageData();
  fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
  .then((response) => response.json())
  .then((data) => {
    fillPosts(data.posts);
    const [featuredPost] = data.posts;
    return fetch(`https://dummyjson.com/posts/${featuredPost.id}/comments`)
  })
  .then((coment) => coment.json())
  .then((data) => fillFeaturedPostComments(data.comments))
  .catch((error) => fillErrorMessage(error));

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});

const USERS_API = 'https://dummyjson.com/users';

const users = fetch(USERS_API)
  .then((response) => response.json())
  .then((response) => console.log(response));

// const generateEmail = (fullname) => {
//   const email = fullname.replace(' ', '_').toLowerCase();
//   return {
//     nome: fullname, email: `${email}@trybe.com`,
//   }
// }
// const newEmployees = (generate) => {
//   const employees = {
//     id1: generate('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: generate('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: generate('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };
// console.log(newEmployees(generateEmail));

// const generateNumber = () => {
//   const generate = Math.floor(Math.random () * (6 - 1) + 1)
//   return generate;
// };

// const checkRandomNumber = (number) => {
//   if (number === generateNumber()) {
//     return 'Parabéns, você ganhou';
//   }
//   return 'Tente novamente';
// }

// console.log(checkRandomNumber(5));
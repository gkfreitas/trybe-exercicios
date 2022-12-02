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

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const compare = (rAnswers, sAnswers) => {
//   const acertos = rAnswers.filter((element, index) => {
//     return element === sAnswers[index];
//   });
//   const semResposta = sAnswers.filter((element) => {
//     return element === 'N.A'
//   });
//   const erros = acertos.length - semResposta.length;
//   const result = acertos.length - erros * 0.5;
//   return `Total de pontos: ${result}`;
// };

// const checkAnswers = (rAnswers, sAnswers, callback) => {
//   return callback(rAnswers,sAnswers);
// }
// console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));
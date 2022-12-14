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

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1920,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// const expectedResult = 'Stephen King';
// const authorBornIn1947 = () => {
//   // escreva aqui o seu código
//   const bookFind = books.find((element) => element.author.birthYear === 1947);
//   return bookFind.author.name;
// }
// console.log(authorBornIn1947());

// const expectedResult = 'Duna';
// const smallerName = () => {
//   let nameBook;
//   let bookLength = books[0].name.length;
//   // escreva aqui o seu código
//   books.forEach((element) => {
//     if(bookLength > element.name.length) {
//       bookLength = element.name.length;
//     }
//   nameBook = books.find((element) => element.name.length === bookLength);
//   });
//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook.name;
// }

// console.log(smallerName());

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// const getNamedBook = () => {
//   // escreva seu código aqui
//   return books.find((element) => element.name.length === 26);
// }

// console.log((getNamedBook()));

// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//   return books.every((element) => {
//     return element.author.birthYear > 1900;
//   });
// }

// console.log((everyoneWasBornOnSecXX()));



// const expectedResult = true;

// const someBookWasReleaseOnThe80s = () => {
//   // escreva seu código aqui
//   return books.some((element) => {
//     return element.releaseYear > 1980;
//   });
// }

// console.log((someBookWasReleaseOnThe80s()));

const expectedResult = false;

const authorUnique = () => {
  // escreva seu código aqui
  return books.every((book) =>{
    return !books.some((bookSome) => {
      return bookSome.author.birthYear === book.author.birthYear && bookSome.author.name !== book.author.name;
    });
  });
}

console.log(authorUnique());
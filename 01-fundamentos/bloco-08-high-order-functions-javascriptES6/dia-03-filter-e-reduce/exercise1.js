// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];

// Adicione o código do exercício aqui:

// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965
//   }
// ];

// const fantasyOrScienceFiction = (array) => {
//   // escreva seu código aqui
//   return array.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');
// }

// console.log(fantasyOrScienceFiction(books));

// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

// const oldBooksOrdered = (array) => {
//   // escreva seu código aqui
//   const filterAge = array.filter((element) => {
//     const bookAge = 2022 - element.releaseYear;
//     return bookAge > 60;
//   });
//   return filterAge.sort((a,b) => a.releaseYear - b.releaseYear)
// }

// console.log(oldBooksOrdered(books));

// const expectedResult = [ 'Fundação', 'Duna' ];

// const booksByAuthorBirthYear = (birthYear) => {
//   // escreva seu código aqui
//   const filterBook = (books.filter((element) => element.author.birthYear === birthYear));
//   return filterBook.map((element) => element.name);
// }
// const result = booksByAuthorBirthYear(1920);
// console.log(result);

// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// const fantasyOrScienceFictionAuthors = () => {
//   // escreva seu código aqui
//   const filterGenre = books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');
//   const namePerGenre = filterGenre.map((element) => element.author.name);
//   return namePerGenre.sort();
// }

// console.log(fantasyOrScienceFictionAuthors());

// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// const oldBooks = () => {
//   // escreva seu código aqui
//   const filterAge = books.filter((element) => {
//     const bookAge = 2022 - element.releaseYear;
//     return bookAge > 60;
//     });
//   return filterAge.map((element) => element.name);
// }
// console.log(oldBooks());

// const expectedResult = 'O Senhor dos Anéis';

// const authorWith3DotsOnName = () => {
//   // escreva seu código aqui
//   const bookFind = books.find((element) => {
//     return element.author.name === 'J. R. R. Tolkien';
//   });
//   return bookFind.name;
// }

// console.log(authorWith3DotsOnName());

// Fonte: <https://restcountries.com/v2/all>

// const countries = [
//   {
//     name: 'Afghanistan',
//     region: 'Asia',
//     currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
//     capital: 'Kabul',
//     population: 40218234,
//     area: 652230
//   },
//   {
//     name: 'Åland Islands',
//     region: 'Europe',
//     currencies: [{ code: 'EUR', name: 'Euro' }],
//     capital: 'Mariehamn',
//     population: 28875,
//     area: 1580
//   },
//   {
//     name: 'Albania',
//     region: 'Europe',
//     currencies: [{ code: 'ALL', name: 'Albanian lek' }],
//     capital: 'Tirana',
//     population: 2837743,
//     area: 28748
//   },
//   {
//     name: 'Algeria',
//     region: 'Africa',
//     currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
//     capital: 'Algiers',
//     population: 44700000,
//     area: 2381741
//   },
//   {
//     name: 'American Samoa',
//     region: 'Oceania',
//     currencies: [{ code: 'USD', name: 'United States Dollar' }],
//     capital: 'Pago Pago',
//     population: 55197,
//     area: 199
//   },
//   {
//     name: 'Andorra',
//     region: 'Europe',
//     currencies: [{ code: 'EUR', name: 'Euro' }],
//     capital: 'Andorra la Vella',
//     population: 77265,
//     area: 468
//   },
//   {
//     name: 'Angola',
//     region: 'Africa',
//     currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
//     capital: 'Luanda',
//     population: 32866268,
//     area: 1246700
//   },
//   {
//     name: 'Anguilla',
//     region: 'Americas',
//     currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
//     capital: 'The Valley',
//     population: 13452,
//     area: 91
//   }
// ];

// const expectedResult = 120797034;

// const getPopulation = () => {
//  // retorne o seu código aqui
//  const mapPopulation = countries.map((element) => element.population)
//  return mapPopulation.reduce((acc, curr) => acc + curr);
// }

// console.log(getPopulation());

// const expectedResult = 4311757;

// const getTotalArea = () => {
// // retorne seu código aqui
// const mapArea = countries.map((element) => element.area);
// return mapArea.reduce((acc, curr) => acc + curr);
// }

// console.log(getTotalArea());

// const expectedResult = {
//   name: 'American Samoa',
//   region: 'Oceania',
//   currencies: [{ code: 'USD', name: 'United States Dollar' }],
//   capital: 'Pago Pago',
//   population: 55197,
//   area: 199
// }

// const longestName = () => {
//   // retorne seu código aqui
//   return countries.reduce((acc, cur) =>  acc.name.length > cur.name.length ? acc : cur);
// }

// console.log(longestName());

// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// const expectedResult = 20;

// const countA = () => {
//   // retorne seu código aqui
//   const joinNames = names.join('').toLowerCase();
//   const splitNames = joinNames.split('');
//   const splitNamesFilter = splitNames.filter((element) => element === 'a');
//   return splitNamesFilter.length;
// };

// console.log(countA());

// O index 0 do array `students` equivale ao index 0 do array `grades`

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// const expectedResult = [
//  { name: 'Pedro Henrique', average: 7.8 },
//  { name: 'Miguel', average: 9.2 },
//  { name: 'Maria Clara', average: 8.8 },
// ];

// const studentAverage = () => {
//   // retorne seu código aqui
//   const averageGrades = (grades.map((element) => element.reduce((acc, num) => acc + num)))
//   const studentsMap = students.map((element) => element);

//  const nameAndAverage = students.map((element, index) => ({
//     name: element,
//     average: (grades[index].reduce((acc, num) => acc + num) / grades[index].length),
//  }))
//  return nameAndAverage;
  
// }
// console.log(studentAverage());

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// const flatten = () => {
//   // retorne seu código aqui|
//   return arrays.reduce((acc, cur) => {
//     return `${acc},` + cur;
//   });
// }

// console.log(flatten().split(','));


// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// const reduceNames = () => {
  //   // retorne seu código aqui
  //   return books.reduce((acc, cur, index) => {
    //     if (books.length -1 === index) {
      //       return `${acc}${cur.author.name}.`
      //     } else {
//       return `${acc}${cur.author.name}, `;
//     }

//   }, '');
// }
// console.log(reduceNames())
// const expectedResult = 43;

// const averageAge = () => {
//   // retorne seu código aqui
//   const booksMap = books.map((element) => element.releaseYear - element.author.birthYear);
//   const booksMapSum = booksMap.reduce((acc, age) => acc + age);
//   return booksMapSum / booksMap.length;
// }

// console.log(averageAge());

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
      birthYear: 1892,
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

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = () => {
  // retorne seu código aqui
  const bookMap = books.map((element) => element.name.length);
  const bookReduce = bookMap.reduce((acc, number) => acc > number ? acc : number);
  return books.filter((element) => element.name.length === bookReduce);
}

console.log(longestNamedBook());
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

const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

// const expectedResult = 120797034;

// const getPopulation = () => {
//  // retorne o seu código aqui
//  const mapPopulation = countries.map((element) => element.population)
//  return mapPopulation.reduce((acc, curr) => acc + curr);
// }

// console.log(getPopulation());

const expectedResult = 4311757;

const getTotalArea = () => {
// retorne seu código aqui
const mapArea = countries.map((element) => element.area);
return mapArea.reduce((acc, curr) => acc + curr);
}

console.log(getTotalArea());
//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

//Passos

//Definir variavel para o fatorial
//Definir quantas vezes vai se repetir até chegar a 0
//Definir variavel que será reduzida 1 vez por repeticão
//Salvar o resultado da primeira multiplicacao e multiplicar pelo proximo
//salvar o primeiro resultado e multiplicar pelo proximo numero

// let fatorial = 1;

// for (let i = 10; i > 0; i -= 1){
//   fatorial = fatorial * i;
//   console.log(fatorial);
// }

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. 
//Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let reverseWord = '';

// for (let i = 0; i < word.length; i += 1) {
//   reverseWord = reverseWord + word[word.length - 1 - i];
// }

// console.log(reverseWord);

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. 
//Considere o número de caracteres de cada palavra.
//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.


let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0].length;
let menorPalavra = array[0].length;

for (let i = 0; i < array.length; i+= 1){
  if (array[i].length > maiorPalavra){
    maiorPalavra = array[i];
  }
}

for (let i = 0; i < array.length; i+= 1){
  if (array[i].length < menorPalavra){
    menorPalavra = array[i];
  }
}
console.log(menorPalavra);
console.log(maiorPalavra);

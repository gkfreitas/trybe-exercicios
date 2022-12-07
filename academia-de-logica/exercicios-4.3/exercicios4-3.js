// Escreva um algoritmo que recebe 2 parâmetros:

// Um array contendo um conjunto de números
// O valor de um desses elementos
// Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

// Caso não o encontre, imprima:

// "Elemento não encontrado no array"

// const numbers = [3, 8 ,9 , 7, 25, 18, 36, 14, 29];
// let nEscolhido = 2;
// let retorno = [];

// for (let i = 0; i < numbers.length; i += 1){
//   if (numbers[i] == nEscolhido){
//     retorno.push(i);
//   }
// }

// if (retorno.length < 1){
//   console.log('Elemento não encontrado no array');
// }else{
//   console.log('Posição no index: ' + retorno);
// }

// if (numbers.indexOf(nEscolhido) > -1){
//   console.log(numbers.indexOf(nEscolhido))
// }else{
//   console.log('Elemento não encontrado no array')
// }

// 2. Retorne os números ímpares
// A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

// Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

// Use a seguinte estrutura na impressão:

// "x, y, z, ...n"

// const numero = 50;
// let par = [];
// let impar = [];

// for (let i = 0; i <= numero; i += 1){
//   if (i % 2 == 0){
//     par.push(i);
//   }else{
//     impar.push(i);
//   }

// }

// console.log(par);
// console.log(impar);

// 3. Números divisíveis por 3

// Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. 
//  O algoritmo deve receber antes de criar essa sequência, o valor inicial e final.

// Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

// Se houver 50 ou mais:

// "Há 50 ou mais números divisíveis por 3"

// Caso o contrário: "Sequência muito pequena."

const numero = 1;
const numero2 = 500;
let divisiveis = [];

for (let i = numero; i < numero2; i += 1){
  if (i % 3 == 0){
    divisiveis.push(i);
  }
}

if (divisiveis.length < 50){
  console.log('Sequência muito pequena.');
}else{
  console.log('Há 50 ou mais números divisíveis por 3');
}







let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (i = 0; i < numbers.length; i = i + 1){
//   console.log(numbers[i]);
// }

// Some todos os valores contidos no array e imprima o resultado;

// let soma = 0;

// for (i = 0; i < numbers.length; i = i + 1){
//   soma = numbers[i] + soma;
// }

// console.log(soma);

//Calcule e imprima a média aritmética dos valores contidos no array;

// let soma = 0;
// let media = 0;

// for (i = 0; i < numbers.length; i = i + 1){
//   soma = numbers[i] + soma;
//   media = soma / numbers.length;
// }

// console.log(media);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, 
//imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// let soma = 0;
// let media = 0;

// for (i = 0; i < numbers.length; i = i + 1){
//   soma = numbers[i] + soma;
//   media = soma / numbers.length;
// }

// if (media > 20){
//   console.log('valor maior que 20');
// }else{
//   console.log('valor menor ou igual a 20');
// }

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i = i + 1){
  maiorValor = numbers[i]
  if (numbers[i] < maiorValor){
    console.log(numbers[i]);
  }
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let i = 0; i < numbers.length; i += 1){
//   console.log(numbers[i]);
// }

//Some todos os valores contidos no array e imprima o resultado;

// let soma = 0;

// for (i = 0; i < numbers.length; i += 1){
//   soma = soma + numbers[i];
//   console.log(soma);
// }

//Calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// let media = 0;
// let soma = 0;

// for (let i = 0; i < numbers.length; i += 1){
  
//   soma = soma + numbers[i];
//   media = soma / numbers.length;
  
// }

// console.log (media);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, 
//imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// let media = 0;
// let soma = 0;

// for (let i = 0; i < numbers.length; i += 1){
  
//   soma = soma + numbers[i];
//   media = soma / numbers.length;
  
// }

// if (media > 20){
//   console.log('Valor maior que 20')
// }else{
// console.log('Valor menor ou igual a 20')
// }

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let maiorNumero = 0

// for (let i = 0; i < numbers.length; i += 1){
//   if (numbers[i] > maiorNumero){
//     maiorNumero = numbers[i];
//   }
   
// }

// console.log(maiorNumero);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let restos = 0;
let qntdImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
  restos = numbers[i] % 2;
  if (restos !== 0){
    qntdImpares = qntdImpares + 1;
  }

}

if (qntdImpares === 0){
  console.log('nenhum valor ímpar encontrado')
}else{
  console.log(qntdImpares);
}








// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, 
//definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// const a = 5;
// const b = 3;

// function adicao() {
//     return a + b;
// }

// function subtracao() {
//     return a - b;
// }

// function multiplicacao() {
//     return a * b;
// }

// function divisao() {
//     return a / b;
// }

// function modulo() {
//     return a % b;
// }

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// const n1 = 37;
// const n2 = 58;

// function maiorNumero() {
//     if (n1 > n2){
//         return n1 + ' é o maior número.';
//     }else if(n2 > n1){
//         return n2 + ' é o maior número';
//     }else{
//         return 'Os números são iguais';
//     }
// }

// console.log(maiorNumero());

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// const n1 = 37;
// const n2 = 780;
// const n3 = 71;

// function maiorNumero() {
//     if (n1 > n2 && n1 > n3){
//         return n1 + ' é o maior número.';
//     }else if(n2 > n1 && n2 > n3){
//         return n2 + ' é o maior número';
//     }else if(n3 > n1 && n3 > n2){
//         return n3 + ' é o maior número';
//     }else{
//         return 'Todos os numeros são iguais';
//     }
// }

// console.log(maiorNumero());

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, 
//e caso não seja nem positivo e nem negativo retorne “zero”.

function avaliador(numero) {
  if (numero > 0){
    return 'Número positivo'
  }else if (numero < 0){
    return 'Número negativo'
  }else{
    return 'Zero, numero neutro'
  }
}

console.log(avaliador(0))
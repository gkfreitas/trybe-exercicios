//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

//Passos

//Definir variavel para o fatorial
//Definir quantas vezes vai se repetir até chegar a 0
//Definir variavel que será reduzida 1 vez por repeticão
//Salvar o resultado da primeira multiplicacao e multiplicar pelo proximo
//salvar o primeiro resultado e multiplicar pelo proximo numero

let fatorial = 1;

for (let i = 10; i > 0; i -= 1){
  fatorial = fatorial * i;
  console.log(fatorial);
}



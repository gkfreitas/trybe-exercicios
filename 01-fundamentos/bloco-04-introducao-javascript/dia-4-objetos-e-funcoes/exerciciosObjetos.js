// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
// Bem-vinda, Margarida

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem-vinda, ' + info.personagem);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. 
//Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorente: 'sim'
// };



// console.log(info['recorente']);

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// personagem
// origem
// nota
// recorrente

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorente: 'sim'
};

for (let key in info){
  console.log(key);
}

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
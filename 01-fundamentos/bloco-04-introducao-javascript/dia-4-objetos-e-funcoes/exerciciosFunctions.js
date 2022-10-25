// Exercicio 1 -

// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

// let palindromoTrue = ''; 
// function verificaPalindrome(palindromo){
// 		for (let i = 0; i < palindromo.length; i += 1) {
// 			palindromoTrue += palindromo[palindromo.length - 1 - i];
// 	}
// 	if (palindromo == palindromoTrue){
// 		return true;
// 	}else{
// 		return false;
// 	}
// } 


// console.log(verificaPalindrome('cabeca'));

// Exercicio 2 -

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

// function maiorNumero(index){

// 	let maiorValor = index[0];

// 	for (i = 0; i < index.length; i += 1) {

// 		if (maiorValor < index[i]){
// 			maiorValor = index[i];
// 		}
// 	}
// 	return maiorValor;
// }

// console.log(maiorNumero([2, 3, 6, 7, 10, 1]));


// Exercicio - 3

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

// function menorNumero(index){

// 	let menorValor = index[0];

// 	for (i = 0; i < index.length; i += 1) {

// 		if (menorValor > index[i]){
// 			menorValor = index[i];
// 		}
// 	}
// 	return menorValor;
// }

// console.log(menorNumero([2, 4, 6, 7, 10, 0, -3]));

// Exercicio 4 -

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

// function maiorPalavra(index){

// 	let maiorValor = index[0].length;
// 	let maiorPalavra2 = '';

// 	for (i = 0; i < index.length; i += 1) {

// 		if (maiorValor < index[i].length){
// 			maiorValor = index[i].length;
// 		}
// 		if (maiorValor == index[i].length){
// 			maiorPalavra2 = index[i]; 
// 		}
// 	}

// 	return maiorPalavra2;
// }

// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
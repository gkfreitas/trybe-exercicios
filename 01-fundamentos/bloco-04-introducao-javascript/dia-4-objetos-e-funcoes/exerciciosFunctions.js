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

function maiorNumero(index){

	let maiorValor = index[0];

	for (i = 0; i < index.length; i += 1) {

		if (maiorValor < index[i]){
			maiorValor = index[i];
		}
	}
	return maiorValor;
}

console.log(maiorNumero([489, 789, 489, 2165, 1748, 156, 78749, 123]));

// Exercicio 1 -

// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

let palindromoTrue = ''; 
function verificaPalindrome(palindromo){
		for (let i = 0; i < palindromo.length; i += 1) {
			palindromoTrue += palindromo[palindromo.length - 1 - i];
	}
	if (palindromo == palindromoTrue){
		return true;
	}else{
		return false;
	}
} 

console.log(verificaPalindrome('cabeca'));
  

// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
// 	name: 'Marta',
// 	lastName: 'Silva',
// 	age: 34,
// 	medals: {
// 		golden: 2,
// 		silver: 3
// 	}
// }

// console.table(player);

//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let key in names){
	console.log(key);
}
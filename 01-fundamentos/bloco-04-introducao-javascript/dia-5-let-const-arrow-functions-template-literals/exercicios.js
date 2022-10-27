// Exercicio 1 -

// // Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
1// Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo,
//  ela não deve ser acessível fora do escopo em que esteja sendo declarada.
//  Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
//  Copie o código abaixo e rode-o para verificar sua saída:

    // // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    // let pessoa = {
    //   nome: 'Henri',
    //   idade: 20
    // }
    // pessoa = {
    //   nome: 'Luna',
    //   idade: 19
    // } // Altere essa estrutura para corrigir o erro.

    // console.log('Nome:', pessoa.nome);
    // console.log('Idade:', pessoa.idade);

// Exercicio 2 -

// 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

// 🚀 Transforme a função numeroAleatorio em uma arrow function;

// const numeroAleatorio = () => Math.random();

// console.log(numeroAleatorio());

// Exercicio 3 -
// 🚀 Transforme a função hello em uma arrow function;

// const hello = (nome) => `Olá ${nome}`;

// let nome = 'Ivan';
// console.log(hello(nome));

// Exercicio 4 -
// 🚀 Transforme a função nomeCompleto em uma arrow function;


// const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
// let nome = 'Ivan';
// let sobrenome = 'Pires';

// console.log(nomeCompleto(nome, sobrenome));

// Exercicio 5 -
//Altere a expressão if/else utilizando ternary operator;

// let speed = 90;

//   const speedCar = (speed) => {
//    return speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;

//   };
  
//   console.log(speedCar(speed));

  // Exercicio 6 -

  Crie uma função que ligue e desligue um motor de um carro.
  Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
  Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
  Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
  Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
  Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.
// 1 - Jogo da pessoa estudante

let jogoRodrigo = [7, 58, 9 ,13, 27, 35]

// 2 - Criando sorteiro

let n1 = Math.floor(Math.random() * 60) + 1;
let n2 = Math.floor(Math.random() * 60) + 1;
let n3 = Math.floor(Math.random() * 60) + 1;
let n4 = Math.floor(Math.random() * 60) + 1;
let n5 = Math.floor(Math.random() * 60) + 1;
let n6 = Math.floor(Math.random() * 60) + 1;

let megaSenaJogo = [n1, n2, n3, n4, n5 ,n6];

// 3 - Percorrendo os dois arrays

for( i = 0; i < jogoRodrigo.length; i += 1){
    for( i = 0; i < megaSenaJogo.length; i += 1){
        
    }
}


// 4 - Comparando o jogo com o sorteio

let numerosIguais = [];

for( i = 0; i < jogoRodrigo.length; i += 1){
    for( i2 = 0; i2 < megaSenaJogo.length; i2 += 1){
        if (jogoRodrigo[i] === megaSenaJogo[i2]){
            numerosIguais.push(megaSenaJogo[i2]);
        }         
    }
}


// 5 - Imprimindo resultados

console.log (numerosIguais);
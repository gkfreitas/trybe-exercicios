//1. Descubra a idade mínima

const marina = 10;
const silvia = 32;
const iza = 16;

if (iza < silvia && iza < marina) {
  console.log( "Iza é a pessoa mais jovem e possui " + iza + " anos de idade" );
}
else if (silvia < iza && silvia < marina) {
  console.log( "Silvia é a pessoa mais jovem e possui " + silvia + " anos de idade" );
}
else {
console.log( `Marina é a pessoa mais jovem e possui ${marina} anos de idade` );
}

//2. Taxa Metabólica Basal

const age = 25;
const sex = 'F';
const weight = 98;
const height = 1.85;
let bmr = 0;

if (sex === 'M') {
  bmr = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5
}
else {
  bmr = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161
}

console.log(`A taxa metabólica basal é: ${bmr} Kcal`)

//3. Lanchonete da Trybe

const lanche = 3;

switch (lanche) {
  case 1: console.log('Trybe Lanche Feliz')
    break;
  case 2: console.log('McTrybe')
    break;
  case 3: console.log('TrybeWooper')
    break;
  case 4: console.log('X-Trybe')
    break;
  case 5: console.log('Triplo Trybe com JS')
    break;

  default:
    break;
}
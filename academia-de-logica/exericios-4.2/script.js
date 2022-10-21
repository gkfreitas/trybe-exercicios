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
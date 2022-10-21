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

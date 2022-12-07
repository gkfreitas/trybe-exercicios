// escreva sum abaixo

const sum = (...numbers) => {
  return numbers.reduce((acc, cur) => acc + cur);
}

console.log(sum(1,2,3,8,8,8,88,8,8,8,8,8))
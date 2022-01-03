/*
Dado un número devolver su factorial.

EJEMPLO:
5!
1 x 2 x 3 x 4 x 5

OUTPUT:
120

*/

const factorial = (number) => {
  let result = 1;
  for (let index = 1; index <= number; index++) {
    result = result * index;
  }
  return result;
};
console.log(factorial(5));

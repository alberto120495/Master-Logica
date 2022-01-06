/*
Dado una array de números, devolver un array nuevo con los numeros pares e imapres por separados

EJEMPLO:
pares([1,2,3,4])
OUTPUT:
{
  pares:[2,4]
  impares:[1,3]
}

*/
const pares = (array) => {
  return {
    pares: array.filter((element) => element % 2 === 0),
    impares: array.filter((element) => element % 2 !== 0),
  };
};

console.log(pares([1, 2, 3, 4]));

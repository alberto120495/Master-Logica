/*
Dado un array, crear otro con el
primer y el último elemento del array original.

EJEMPLO:
firstAndLast([100,200,300,780])
OUTPUT:
[100,780]

*/
const firstAndLast = (array) => {
  return [array[0], array[array.length - 1]];
};

console.log(firstAndLast([100, 200, 300, 780]));

/*
Dado un array, dividirlo en tantos sub-arrays
como sea necesario basandonos en un numero que indique su tamaño

Dividirlo en arrays de x elementos

Ejemplo:
divideArray([7,8,9,10], 2)

OUTPUT:
[[7,8],[9,10]]

*/

const splitArray = (array, split) => {
  let arrays = [];
  array.forEach((element) => {
    let lastArray = arrays[arrays.length - 1];
    if (!lastArray || lastArray.length === split) {
      arrays.push([element]);
    } else {
      lastArray.push(element);
    }
  });

  return arrays;
};

console.log(splitArray([7, 8, 9, 10], 2));

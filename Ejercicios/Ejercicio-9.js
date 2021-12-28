/*
Dados dos arrays devolver un array con solo los elementos
comunes entre ambos 
Ejemplo:[4,5,6,7], [7,8,9,7,5]
Output:[5,7]
*/

const array = [4, 5, 6, 7];
const array2 = [7, 8, 9, 7, 5];

//!Solucion curso - MEJOR
const findEquals2 = (array, array2) => {
  return array.filter((element) => array2.includes(element));
};

console.log(findEquals2(array, array2));

//!MI SOLUCION -> Funciona para numeros
const findEquals = (array, array2) => {
  let res = {};
  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array2.length; index2++) {
      if (array[index] === array2[index2]) {
        if (res[array[index]]) {
          res[array[index]]++;
        } else {
          res[array[index]] = 1;
        }
      }
    }
  }
  return Object.keys(res).map(Number);
};

console.log(findEquals(array, array2));

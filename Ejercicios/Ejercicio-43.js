/*
Dado un array de números, sacar la media
de todos ellos.

EJEMPLO:
media([1,2,3])
OUTPUT:
2

*/

const media = (array) => {
  let acum = 0;
  console.log(array.length);
  for (let index = 0; index < array.length; index++) {
    acum += array[index];
  }
  return acum / array.length;
};

console.log(media([1, 2, 3, 4, 5, 6]));

//!Solucion Curso
const media2 = (array) => {
  let suma = array.reduce((acum, actualValue) => acum + actualValue);
  return suma / array.length;
};

console.log(media2([1, 2, 3, 4, 5, 6]));

/*

Dado un array de enteros y un número.
Detectar si esa lista de números es una permutación del 1 al número aportado.

En este caso una permutacion es una secuencua de numeros en orden sin que falte ninguno entre ellos
Ejemplo:
1.- console.log(permutacion([1, 2, 3, 4, 5], 5));
2.- console.log(permutacion([1, 2, 3, 5], 5));

OUTPUT:
1.- true
2.- false
*/

const permutacion = (array, numero) => {
  for (let index = 0; index < numero; index++) {
    if (array.indexOf(index + 1) < 0) {
      return false;
    }
  }
  return true;
};

console.log(permutacion([1, 2, 3, 4, 5], 5));
console.log(permutacion([1, 2, 3, 5], 5));

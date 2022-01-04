/*
Dado un arreglo devolver el valor mas bajo y el valor mas alto

EJEMPLO:
altoBajo([1,2,3,4,5])

OUTPUT:
{
  bajo:1
  alto:5
}

*/

const bajoAlto = (array) => {
  array = array.sort((a, b) => a - b);
  return {
    bajo: array[0],
    alto: array[array.length - 1],
  };
};
console.log(bajoAlto([2, 1, 3, 5, 4, 11]));

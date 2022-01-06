/*
Dado un array de numeros, devolver el array con sus numeros elevados al cuadrado.


EJEMPLO:
alCuadrado([5,6,7])


OUTPUT:
[25,36,49]


*/
const pow = (array) => {
  array = array
    .filter((element) => typeof element === "number")
    .map((element) => element * element);
  return array;
};
console.log(pow([5, 6, 7, "victor", true, 8]));

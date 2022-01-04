/*
Dado un numero mostrar un listado de los cuadrados de todos los numeros naturales hasta llegar 
hasta el mismo


EJEMPLO:
 cuadrados(4)


OUTPUT:
1
4
9
16
*/

const cuadrados = (number) => {
  for (let index = 1; index <= number; index++) {
    console.log(index * index);
  }
};

console.log(cuadrados(4));
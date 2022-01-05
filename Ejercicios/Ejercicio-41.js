/*
Dado un número, mostrar un triángulo de
asteriscos con ese número de filas.

EJEMPLO:
createPyramid(4)

OUTPUT:
   *
  ***
 *****
*******
*/

function createPyramid(rows) {
  let mitad = Math.floor(rows - 1);
  let resultado = "";
  //Bucle para filas
  for (let fila = 0; fila < rows; fila++) {
    let nivel = "";
    //bucle para pintar asteriscos
    for (let columna = 0; columna < rows * 2 - 1; columna++) {
      if (mitad - fila <= columna && mitad + fila >= columna) {
        nivel += "*";
      } else {
        nivel += " ";
      }
    }
    resultado += nivel + "\n";
  }
  return resultado;
}
console.log(createPyramid(4));

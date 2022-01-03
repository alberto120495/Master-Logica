/*
Dado un número, indicar si es un número capicúa o no.
Los número capicúa se leen igual de izquierda a derecha y viceversa.

EJEMPLO:
1.- capi(2002)
2.- capi(2014)

OUTPUT:
1.- true
2.- false

*/

const capi = (number) => {
  let string = number.toString().split("").reverse().join("");
  return parseInt(string) === number

};
console.log(capi(2002));
console.log(capi(2014));

/*
Dado un numero mostrar sus divisores
Ejemplo:
mostrarDivisores(5)

OUTPUT:
1
5
*/

const mostrarDivisores = (number) => {
  let res = "";
  for (let index = 1; index <= number; index++) {
    if (number % index === 0) {
      res += `${index}\n`;
    }
  }
  return res;
};

console.log(mostrarDivisores(15));

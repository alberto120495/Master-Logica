/*
dado un número devolver cuántos bucles tiene
Un numero tiene un bucle cuando tiene un circulo cerrado
cuando lo dibujas, por lo que 6 tiene un bucle,
1 n tiene bucle y 8 tiene dos bucles
EJEMPLO:
bucles(28861)

OUTPUT:
5

*/
const bucles = (number) => {
  let arrayNumeros = number.toString().split("");
  let bucles = 0;
  for (let numero of arrayNumeros) {
    numero = parseInt(numero);
    if (numero === 0 || numero === 6 || numero === 9) {
      bucles++;
    } else if (numero === 8) {
      bucles += 2;
    }
  }
  return bucles;
};

console.log(bucles(28861));

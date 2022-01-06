/*
Dado un número mostrar cuántos años, meses y días equivalen.

EJEMPLO:
calcularDias(920)

OUTPUT:
Equivale a 2 años 6 meses y 10 dias

*/

const calculateDate = (number) => {
  const years = Math.floor(number / 365);
  let restDays = number % 365;
  const months = Math.floor(restDays / 30);
  restDays = restDays % 30;

  return `Equivale a ${years} años ${months} meses ${restDays} dias`;
};
console.log(calculateDate(920));


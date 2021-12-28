/*
Cuánto es el x porciento de x número?
*/

const findPorcentage = (porcentage, number) => {
  return `El ${porcentage}% de ${number} es: ${porcentage * 0.01 * number} `;
};

console.log(findPorcentage(5, 100));
console.log(findPorcentage(43, 897));

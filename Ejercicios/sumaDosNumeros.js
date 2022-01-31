/*
Regresa los indices de los numeros que sumados sean igual al valor del objetivo

Ejemplo
 [9, 4, 10, 3];
 
 objetivo = 13 

 output: [0,1]

 SOLO PUEDES USAR UN FOR

*/

const input = [9, 4, 10, 3, 39, 12, 1, 4, 6];

const twoSum = (array, target) => {
  const differences = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    differences[element] = {
      indice: index,
    };

    if (differences[target - element]) {
      return [differences[target - element].indice, index];
    }
  }
};

console.log(twoSum(input, 13));

/*
Dado dos números devolver cuanto el número impares hay entre ellos.
Ejemplo: (1,100) 
Output: 50
*/

const findOddBtwTwoNumbers = (start, finish) => {
  let counter = 0;
  for (let index = start; index <= finish; index++) {
    if (index % 2 !== 0) counter++;
  }
  return counter;
};

console.log(findOddBtwTwoNumbers(1, 100));

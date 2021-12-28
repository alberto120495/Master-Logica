/*
Dado un número entero, inviértelo y devuelve de nuevo el número entero.
Ejemplo: 67 
Output: 76
*/

const reverseNumber = (number) => {
  let reverse =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  return reverse;
};

console.log(reverseNumber(67));

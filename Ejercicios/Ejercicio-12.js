/*
 Dado un número, mostrar todos los números desde ese al 0 de 8 en 8
 en una lista con guiones donde cada numero debe empezar por n°


Ejemplo: hastaCero(100)
Output: 
- n°100
- n°92
- n°84
- n°76
- n°68
- n°60
- n°52
- n°44
- n°36
- n°28
- n°20
- n°12
- n°4
*/

const untilZero = (number) => {
  let res = `--- From ${number} to 0 --- \n`;
  for (var index = number; index >= 0; index -= 8) {
    res += `- n°${index}\n`;
  }
  if (index <= 0) {
    res += `- n°0\n`;
  }
  return `${res} ---END---`;
};

console.log(untilZero(10));

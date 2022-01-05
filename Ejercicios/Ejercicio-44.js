/*
Dado una red de strings o de cadenas de texto, devolver otro
con los valores que estén formados por más de dos palabras

EJEMPLO:
words(["hola", "san franciso", "ciudad real", "alberto"])

OUTPUT:
["san francisco", "cidudad real"]
*/

const words = (array) => {
  let newArray = [];
  for (const element of array) {
    if (element.includes(" ") === true) {
      newArray.push(element);
    }
  }
  return newArray;
};

console.log(words(["hola", "san franciso", "ciudad real", "alberto"]));

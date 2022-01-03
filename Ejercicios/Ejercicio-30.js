/*
Dado un array de números, devolver el array sin elementos
duplicados.
si hay un string eliminarlo del array.


EJEMPLO:
deleteDuplicates([1, 2, 1, 1, 1, 3, 4, "a"])

OUTPUT:
[1,2,3,4]

*/

const deleteDuplicates = (array) => {
  let object = {};
  let newArray = [];
  for (const element of array) {
    if (typeof element !== "string") {
      object[element] = element;
    }
  }
  for (const key in object) {
    newArray.push(object[key]);
  }

  return newArray;
};
console.log(deleteDuplicates([1, 2, 1, 1, 1, 3, 4, "a"]));

//!Solucion Curso - MEJOR

const deleteDuplicates = (array) => {
  array = array.filter((element) => typeof element === "number");
  return Array.from(new Set(array));
};
console.log(deleteDuplicates([1, 2, 1, 1, 1, 3, 4, "a"]));

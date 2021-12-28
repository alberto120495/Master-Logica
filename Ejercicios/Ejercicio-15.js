/*
Dado una cadena de texto, devolver el carácter más usado.

Ejemplo:
moreUse("albertopimentel.com")

OUTPUT:
Lo que mas se repite es: e

*/

const moreUse = (text) => {
  let obj = {};
  let max = 0;
  let moreUseCharacter = "";

  for (const element of text) {
    if (obj[element]) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  }

  for (const key in obj) {
    if (obj[key].toString().trim().length === 1 && obj[key] > max) {
      max = obj[key];
      moreUseCharacter = key;
    }
  }

  return `Lo que mas se repite es: ${moreUseCharacter}, ${max} veces`;
};
console.log(
  moreUse(`he subido un nuevo video
 a mi canal de youtube victor robles`)
);

console.log(moreUse("albertopimentel.com"));

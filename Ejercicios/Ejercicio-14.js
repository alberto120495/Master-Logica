/*
Dado un string y un número, repetir el string tantas veces
como el número indique.

Ejemplo:
repet("alberto",2)
OUTPUT:
albertoalberto

*/

const repeat = (word, times) => {
  let text = "";
  for (let index = 0; index < times; index++) {
    text += word;
  }
  return text;
};

console.log(repeat("alberto", 2));

//?Funcion prototipo
String.prototype.repeat = function (times) {
  let text = "";
  for (let index = 0; index < times; index++) {
    text += this;
  }
  return text;
};

console.log("hola".repeat(4));

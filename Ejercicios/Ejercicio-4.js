/*
Dado una cadena de texto, darle la vuelta e invertir elorden
de sus caracteres sin usar métodos propios del lenguaje, sólo estructuras de control.
*/

const textReverse = (text) => {
  let result = "";
  for (const letter of text) {
    result = letter + result;
  }
  return result;
};

console.log(textReverse("perrito"));


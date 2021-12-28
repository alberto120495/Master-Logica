/*
Dado un texto y una búsqueda, censurar todas las coincidencias
de la búsqueda en el texto con la palabra [-CENSURADO-]
Si el texto y la búsqueda están vacíos, mostrar: "No puedes leer el texto y la búsqueda" en el caso de
que ambos parámetros no lleguen.

Ejemplo: censurado("hola,hola","hola")
Output: 
[-CENSURADO-] [-CENSURADO-]

Ejemplo: censurado()
Output: 
"No puedes leer el texto y la búsqueda"
*/

const censored = (phrase, word) => {
  let resultado = "";
  if (!phrase && !word) return "No puedes leer el texto y la búsqueda";
  if (!word) return "No puedes hacer la búsqueda";
  return (resultado = phrase.replace(new RegExp(word, "gi"), "[-CENSURADO-]"));
};

//!Solucion Curso
function censurado(texto = false, busqueda = false) {
  let resultado = "";
  if (!texto && !busqueda) {
    resultado = "No puedes leer el texto y la búsqueda";
  } else if (!texto && busqueda) {
    resultado = "No puedes leer el texto";
  } else if (texto && !busqueda) {
    resultado = "No puedes hacer la búsqueda";
  }
  resultado = texto.replace(new RegExp(busqueda, "gi"), "[-CENSURADO-]");

  return resultado;
}

console.log(censored("hola hola", "hola"));
console.log(
  censored("hola como estas la verdad es que me caes holaaaaa", "hola")
);
console.log(censored());
console.log(censored("hola"));

console.log(censurado("hola hola", "hola"));

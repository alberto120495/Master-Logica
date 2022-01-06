/*
dada una cadena de texto, poner en mayúscula la
primera letra de cada una de las palabras en la cadena y luego devolver la cadena de texto.

Ejemplo:
hola como estas mi hector

OUTPUT:
Hola Como Estas mi Hector

*/

const upper = (frase) => {
  const fraseArray = frase.split(" ");
  let fraseCompleta = "";

  fraseArray.forEach((element) => {
    const may = element.slice(0, 1).toUpperCase();
    fraseCompleta += may + element.slice(1) + " ";
  });

  return fraseCompleta;
};

console.log(upper("hola como estas mi hector"));

//!Solucion Curso

const enMayuscula = (texto) => {
  let resultado = "";
  for (const index in texto) {
    if (texto[index - 1] === " " || index == 0) {
      resultado += texto[index].toUpperCase();
    } else {
      resultado += texto[index];
    }
  }

  return resultado;
};

console.log(enMayuscula("hola visita victorrovlesweb.es"));

const enMayuscula2 = (texto) => {
  let palabras = [];

  for (const palabra of texto.split(" ")) {
    palabras.push(palabra[0].toUpperCase() + palabra.substring(1));
  }
  return palabras.join(" ");
};

console.log(enMayuscula2("hola visita victorrovlesweb.es"));

/*
Dado una cadena de texto y un número, recortar el string 
mostrando los x primeros caracteres

Ejemplo:
recortar("Cursos Desarrollo Web",6 )


OUTPUT:
'Cursos'
*/

const cutText = (text, number) => {
  let newText = text.slice(0, number);
  return newText;
};

console.log(cutText("Cursos Desarrollo Web", 6));

//!Solucion Curso -> substring

const recortar = (text, number) => {
  let resultado = "";
  if (typeof text === "string" && typeof number === "number") {
    resultado = text.substring(0, number);
  } else {
    resultado = "Introduce bien los datos";
  }

  return resultado;
};

console.log(recortar("Cursos Desarrollo Web", 8));
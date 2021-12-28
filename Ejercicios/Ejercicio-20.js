/*
Dadas tus cadenas de texto, crear un algoritmo que compruebe 
si son anagramas entre si.

una cadena es un anagrama de otra si usa los mismos caracteres 
en la misma cantidad 

No tener en cuenta espacio, símbolos raros, puntos etc.

Ejemplo:

1.- anagramas("Riesgo", "Sergio")
2.- anagramas("Victor", "Tobles")

OUTPUT:
1.- True
2.- False
*/

const anagramas = (word1, word2) => {
  word1 = word1
    .toLowerCase()
    .replace(/[.*+-?,]/g, "")
    .split("");
  word2 = word2
    .toLowerCase()
    .replace(/[.*+-?,]/g, "")
    .split("");

  word1.sort();
  word2.sort();

  return (
    word1.length == word2.length &&
    word1.every((element, index) => {
      return element === word2[index];
    })
  );
};

console.log(anagramas("Riesgo", "Sergio"));

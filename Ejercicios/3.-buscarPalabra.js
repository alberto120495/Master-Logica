/*
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deben ser parámetros de una función.
*/

const searchCoincidences = (phrase, word) => {
  const clearPhrase = phrase
    .replace(/[.,-?!]/g, "")
    .toLowerCase()
    .split(" ");
  let count = 0;
  clearPhrase.forEach((element) => {
    if (element === word) count++;
  });
  return count;
};

console.log(
  searchCoincidences("hola soy una palabra en una frase, PALABRA.", "palabra")
);
console.log(searchCoincidences("soy la frase", "victor"));

//Solucion Curso
/*
const searchCoincidences = (phrase, word) => {
  const clearPhrase = phrase
    .replace(/[.,-?!]/g, "")
    .toLowerCase()
    .split(" ");
    let resultado = 0;
  let map = {};

  if(phrase.includes(word)){
      for (const word of clearPhrase) {
        if (map[word]) {
          map[word]++;
        } else {
          map[word] = 1;
        }
      }
     resultado = map[word]
     return resultado
  }else{
      resultado = 0
  }
};

*/

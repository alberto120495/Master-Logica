/*
Dada una cadena de texto, comprobar si es un palíndromo o no.
Los palíndromos son simplemente palabras que se leen igual, aún estando invertidas.
Por ejemplo: ana, bob, otto, allivessevilla.
*/

const isPalindrome = (word) => {
  const reverse = word.split("").reverse().join("");
  return word === reverse;
};

console.log(isPalindrome("ana"));

module.exports = isPalindrome;

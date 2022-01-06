/*
Dado en una cadena de texto devolver cuantas vocales
a, e, i, o u. Tiene.

Ejemplo:
vocales("albertopimentel.com")

OUTPUT:
7
*/

const cuentaVocales = (texto) => {
  const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  texto = [...texto];
  let count = 0;

  texto.forEach((element) => {
    if (vocales.hasOwnProperty(element)) {
      vocales[element]++;
    }
  });

  for (const vocal in vocales) {
    count += vocales[vocal];
  }
  return count;
};

console.log(cuentaVocales("albertopimentel.es"));


//!Solucion Curso

const vocales2 = (texto) => {
  let coindicencias = texto.match(/[aeiou]/gi);
  return coindicencias ? coindicencias.length : 0;
};


console.log(vocales2("albertopimentel.es"));

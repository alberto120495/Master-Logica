/*
Dado un string.
Ponerlo completo en mayúsculas o minúsculas, dependiendo de si hay más mayúsculas o minúsculas por
defecto en el string.

Si hay más mayúsculas ponerlo todo en mayúsculas 
Si hay más minúsculas, ponerlo todo en minúsculas.

EJEMPLO:
1.-mayusMinis("JOAQuin")
2.-mayusMinis("Victor")

OUTPUT:
1.- JOAQUIN
2.- victor
*/

const mayusMinus = (text) => {
  let mayus = 0;
  let minus = 0;
  for (const letra of text) {
    if (letra == letra.toUpperCase()) {
      mayus++;
    } else {
      minus++;
    }
  }
  if (mayus > minus) {
    text = text.toUpperCase();
  } else {
    text = text.toLowerCase();
  }

  return text;
};

console.log(mayusMinus("JOAQuin"));
console.log(mayusMinus("Victor"));


//!Solucion Curso
const mayusMinus2 = (text) => {
  let mayus = 0;
  let minus = 0;
  for (const letra of text) {
    if (/[A-Z]/.test(letra)) {
      mayus++;
    } else {
      minus++;
    }
  }
  if (mayus > minus) {
    text = text.toUpperCase();
  } else {
    text = text.toLowerCase();
  }
  return text;
};

console.log(mayusMinus2("JOAQuin"));
console.log(mayusMinus2("Victor"));


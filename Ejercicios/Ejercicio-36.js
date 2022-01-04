/*
Dado un texto devolver cuantoas consonantes y cuentas vocales tiene

EJEMPLO:
cuentaLetrasVocales("victorRobes.es")

OUTPUT:
Consonantes:5
Vocales:6

*/
const cuentaLetrasVocales = (text) => {
  let vocales = 0,
    consonantes = 0;
  let cleanText = text.replace(/[.,!?¡¿0-9]/gi, "");

  for (const letra of cleanText) {
    if (/[áéíóúaeiou]/gi.test(letra)) {
      vocales++;
    } else {
      consonantes++;
    }
  }

  return `Consonantes:${consonantes}\nVocales:${vocales}`;
};

console.log(cuentaLetrasVocales("victorRobles.es"));

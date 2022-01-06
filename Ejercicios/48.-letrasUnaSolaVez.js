/*
Dado un string.
Devolver cuáles son las letras que aparecen sólo una vez
Y cuál es la primera

EJEMPLO:
soloUnaVez("frase frase HOY")
OUTPUT:
[["H", "O", "Y"], "H"]


*/
const soloUnaVez = (text) => {
  let contadores = {};
  let resultado = [];
  text = text.replace([/ ,./], "");
  for (const letra of text) {
    if (contadores[letra]) {
      contadores[letra]++;
    } else {
      contadores[letra] = 1;
    }
  }
  for (const key in contadores) {
    if (contadores[key] === 1) {
      resultado.push(key);
    }
  }

  return [resultado, resultado[0]];
};

console.log(soloUnaVez("frase frase hoy"));

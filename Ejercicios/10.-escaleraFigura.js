/*
Dado un número, mostrar una escalera con escalones de "[-]"
usando el número para los niveles de la escalera.

Ejemplo: escalera(4)
Output: 
[-]
[-][-]
[-][-][-]
[-][-][-][-]
*/

const lader = (number) => {
  let draw = "";
  for (let i = number; i >= 0; i--) {
    for (let j = i; j < number; j++) {
      draw += "[-]";
    }
    draw += "\n";
  }
  return draw;
};

console.log(lader(4));

//!Solucion CURSO
const escalera = (numero) => {
  let escaleraCompleta = "";
  for (let nivel = 1; nivel <= numero; nivel++) {
    let escalones = "";
    for (let escalon = 1; escalon <= nivel; escalon++) {
      escalones += "[-]";
    }
    escaleraCompleta += escalones + "\n";
  }
  return escaleraCompleta;
};

console.log(escalera(4));

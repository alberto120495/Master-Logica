/*
Dada una red de alumnos (nombre y nota), mostrar cuántos alumnos están reprobados
y cuántos están aprobados.

EJEMPLO:
 reprobados([
    ["alberto", 10],
    ["Juan", 5],
    ["Pepe", 4],
    ["Maria", 8],
    ["Martha", 3],
  ])
OUTPUT:
Aprobados:2
Reprobados:3
*/

const reprobados = (array) => {
  let aprobados = 0;
  let reprobados = 0;

  for (const alumno of array) {
    if (alumno[1] > 5) {
      aprobados++;
    } else {
      reprobados++;
    }
  }
  return `Aprobados ${aprobados}\nRepobados:${reprobados}`;
};

console.log(
  reprobados([
    ["alberto", 10],
    ["Juan", 5],
    ["Pepe", 4],
    ["Maria", 8],
    ["Martha", 3],
  ])
);

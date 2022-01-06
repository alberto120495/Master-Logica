/*
Dado un array o un texto, devolver el elemento o palabras que mas aparecen

EJEMPLO:
1.- mostRepeated("victor robles victor")
2.- mostRepeated([1,2,3,4,1])

OUTPUT:
1.- victor
1

*/

const mostRepeated = (data) => {
  if (typeof data === "string") data = data.split(" ");

  let mapeo = {};
  let mostFrecuently = "";
  let mostFrecuentlyValue = 0;

  for (const element of data) {
    if (mapeo[element]) {
      mapeo[element]++;
    } else {
      mapeo[element] = 1;
    }
  }

  for (const key in mapeo) {
    if (mapeo[key] > mostFrecuentlyValue) {
      mostFrecuentlyValue = mapeo[key];
      mostFrecuently = key;
    }
  }

  return mostFrecuently;
};

console.log(mostRepeated("alberto pimentel alberto"));
console.log(mostRepeated([1, 2, 3, 4, 1, 2, 2, 1]));

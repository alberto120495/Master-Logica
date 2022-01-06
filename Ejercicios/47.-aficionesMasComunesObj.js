/*
dado una raíz de objetos devolver cuáles son las aficiones más comunes de los usuarios

EJEMPLO:
aficiones(usuarios)

OUTPUT:
{
  informatica:6,
  cine:7,
  futbol:2,
  videojuegos:1
}

*/
const aficiones = (users) => {
  let aficionesC = {};

  users.forEach((element) => {
    for (const aficion of element.aficiones) {
      if (aficionesC[aficion]) {
        aficionesC[aficion]++;
      } else {
        aficionesC[aficion] = 1;
      }
    }
  });
  return aficionesC;
};

const users = [
  {
    nombre: "Alberto",
    aficiones: ["informatica", "cine", "videojuegos"],
  },
  {
    nombre: "Juan",
    aficiones: ["cine", "videojuegos", "futbol", "tenis"],
  },
  {
    nombre: "Paco",
    aficiones: ["informatica", "cine", "surf"],
  },
  {
    nombre: "Pepe",
    aficiones: ["informatica", "cine", "videojuegos", "futbol", "golf"],
  },
];
console.log(aficiones(users));

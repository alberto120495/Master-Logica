/*
dado un objeto comporbar si existe una propiedad en concreto

EJEMPLO:
existePropiedad(objeto, "nombre")

OUTPUT:
true

*/
const existePropiedad = (object, name) => {
  return object.hasOwnProperty(name);
};

let usuario = {
  nombre: "Alberto",
  apellido: "Pimentel",
};
console.log(existePropiedad(usuario, "nombre"));

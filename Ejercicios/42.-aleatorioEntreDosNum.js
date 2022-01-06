/*
Dado dos numeros sacar un numero aleatorio entre ellos

EJEMPLO:
random(1,100)

OUTPUT:
45

*/

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(random(1, 100));

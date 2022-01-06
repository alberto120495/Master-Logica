/*
Dad un número.

Indicar qué tipo de ángulo es

EJEMPLO:
angulo(47)
angulo(90)
angulo(145)
angulo(180)

OUTPUT:
angulo Agudo
angulo Recto 
angulo Recto 
angulo Recto 

*/

const angle = (angle) => {
  let result = "Angulo completo";
  if (angle < 90 && angle > 0) {
    result = `Angulo agudo`;
  }
  if (angle == 90) {
    result = `Angulo recto`;
  }
  if (angle > 90 && angle < 180) {
    result = `Angulo obtuso`;
  }
  if (angle == 180) {
    result = `Angulo llano`;
  }
  if (angle > 180 && angle < 360) {
    result = `Angulo Concavo`;
  }
  return result;
};
console.log(angle(47));
console.log(angle(90));
console.log(angle(145));
console.log(angle(180));
console.log(angle());

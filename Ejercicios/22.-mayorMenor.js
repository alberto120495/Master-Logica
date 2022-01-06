/*
Dados dos números indicar cuál es mayor y cuál
es menor.

Ejemplo:
mayorMenor(8,6)


OUTPUT:
El numero Mayor es:8
El numero Menor es: 6
*/

const mayorMenor = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return `El numero mayor es:${numberOne} \nEl numero menor es:${numberTwo}`;
  } else if (numberTwo > numberOne) {
    return `El numero mayor es:${numberTwo} \nEl numero menor es:${numberOne}`;
  } else {
    return `Los numeros son iguales`;
  }
};

console.log(mayorMenor(0, 0));

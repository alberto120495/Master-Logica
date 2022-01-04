/*
Dados dos numeros realizar las operaciones basica entre ellos (suma,resta,producto,division)

EJEMPLO:
calculadora(5,5)
OUTPUT:
La suma es:10 
La resta es:0 
La multiplicacion es:25 
La division es:1 

*/
const calculadora = (numberOne, numberTwo) => {
  return `
  La suma es:${numberOne + numberTwo}
  La resta es:${numberOne - numberTwo}
  La multiplicacion es:${numberOne * numberTwo}
  La division es:${numberOne / numberTwo}
    `;
};

console.log(calculadora(5, 5));

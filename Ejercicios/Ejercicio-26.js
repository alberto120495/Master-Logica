/*
Dado un número.
Mostrar la serie de Fibonacci o su serie de Fibonacci.
La serie de Fibonacci es un orden de números 
donde cada número es la suma de los dos números anteriores.

EJEMPLO:
fib(10)[0]
fib(10)[1]

OUTPUT:
Serie completa:0,1,1,2,3,5,8,13,21,35,55
Resultado de la serie fibonnacci:55
*/

const fib = (number) => {
  const serie = [0, 1];
  for (let index = 0; index < number; index++) {
    serie.push(serie[index] + serie[index + 1]);
  }
  return `${serie.toString()}\nResultado de la serie fibonnacci: ${
    serie[serie.length - 1]
  } `;
};
console.log(fib(10));

//!Solucion Curso

const fib2 = (number) => {
  const serie = [0, 1];
  for (let index = 2; index <= number; index++) {
    serie.push(serie[index - 1] + serie[index - 2]);
  }
  return `${serie.toString()}\nResultado de la serie fibonnacci: ${
    serie[serie.length - 1]
  } `;
};

console.log(fib2(10));

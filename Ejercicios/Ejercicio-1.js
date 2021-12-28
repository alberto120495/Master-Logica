//Dado un número, devolver su tabla de multiplicar completa.
const tablaMultiplicar = (numero) => {
  let resultado = `Tabla de multiplicar del: ${numero}\n`;
  for (i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  return resultado;
};

console.log(tablaMultiplicar(8));

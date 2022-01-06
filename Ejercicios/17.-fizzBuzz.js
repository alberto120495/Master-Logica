/*
Dado un número, mostrar los números del 1 hasta el número.
Pero para los múltiplos de 3 imprimir "buzz" en lugar del numero.
y para los múltiplos de 5 imprimir la "lightyear".
Para los múltiplos de 3 y 5 imprimir "BuzzLightYear".

Ejemplo:
buzz(5)

OUTPUT:
1
2
buzz
4
lightyear
*/

const buzz = (number) => {
  let res = "";

  for (let index = 1; index <= number; index++) {
    if (index % 5 === 0 && index % 3 === 0) {
      res += "Buzzlightyear\n";
    } else if (index % 3 === 0) {
      res += "buzz\n";
    } else if (index % 5 === 0) {
      res += "lightyear\n";
    } else {
      res += index + "\n";
    }
  }

  return res;
};

console.log(buzz(30));

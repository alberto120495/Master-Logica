//MASTER LOGICA
//Dado un número, devolver su tabla de multiplicar completa.
const tablaMultiplicar = (numero) => {
  let resultado = `Tabla de multiplicar del: ${numero}\n`;
  for (i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  return resultado;
};
//tablaMultiplicar(8)

/*
Dada una cadena de texto, comprobar si es un palíndromo o no.
Los palíndromos son simplemente palabras que se leen igual, aún estando invertidas.
Por ejemplo: ana, bob, otto, allivessevilla.
*/

const isPalindrome = (word) => {
  const reverse = word.split("").reverse().join("");
  return word === reverse;
};
//isPalindrome("ana")

/*
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deben ser parámetros de una función.
*/
const searchCoincidences = (text, word) => {
  let count = 0;
  const clearPhrase = text
    .replace(/[.,-?!]/g, "")
    .toLowerCase()
    .split(" ");

  clearPhrase.forEach((element) => {
    if (element === word) count++;
  });

  return count;
};

//searchCoincidences("hola soy una palabra en una frase, PALABRA.", "palabra")

/*
Dado una cadena de texto, darle la vuelta e invertir elorden
de sus caracteres sin usar métodos propios del lenguaje, sólo estructuras de control.
*/

const textReverse = (text) => {
  let result = "";
  for (letra of text) {
    result = letra + result;
  }
  return result;
};
//textReverse("perrito")

/*
Cuánto es el x porciento de x número?
*/

const findPorcentage = (porcentage, number) => {
  return `El ${porcentage}% de ${number} es: ${porcentage * 0.01 * number} `;
};

//findPorcentage(5, 100)
//findPorcentage(43, 897)

/*
Dibujar un cuadrado hueco con asteriscos.
*/

const drawHorizontal = (sides) => {
  let horizontal = "";
  for (let index = 0; index < sides; index++) {
    horizontal += "*";
  }
  return horizontal;
};

const drawVertical = (sides) => {
  let vertical = "";
  for (let index = 0; index < sides - 2; index++) {
    vertical += "*";
    for (let index = 0; index < sides - 2; index++) {
      vertical += " ";
    }
    vertical += "*\n";
  }
  return vertical;
};

const square = (sides) => {
  let completeSquare = "";
  completeSquare += drawHorizontal(sides) + "\n";
  completeSquare += drawVertical(sides);
  completeSquare += drawHorizontal(sides);
  return completeSquare;
};
//square(4)

/*
Dado dos números devolver cuanto el número impares hay entre ellos.
Ejemplo: (1,100) 
Output: 50
*/

const findOddBtwTwoNumbers = (start, finish) => {
  let counter = 0;
  for (let index = start; index <= finish; index++) {
    if (index % 2 !== 0) counter++;
  }
  return counter;
};

//findOddBtwTwoNumbers(1, 100)

/*
Dado un número entero, inviértelo y devuelve de nuevo el número entero.
Ejemplo: 67 
Output: 76
*/

const reverseNumber = (number) => {
  let reverse =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  return reverse;
};
//reverseNumber(67)

/*
Dados dos arrays devolver un array con solo los elementos
comunes entre ambos 
Ejemplo:[4,5,6,7], [7,8,9,7,5]
Output:[5,7]
*/

const array = [4, 5, 6, 7];
const array2 = [7, 8, 9, 7, 5];

const findEquals2 = (array, array2) => {
  return array.filter((element) => array2.includes(element));
};
//findEquals2(array, array2)

/*
Dado un número, mostrar una escalera con escalones de "[-]"
usando el número para los niveles de la escalera.
Ejemplo: escalera(4)
Output: 
[-]
[-][-]
[-][-][-]
[-][-][-][-]
*/

const escalera = (niveles) => {
  let result = "";

  for (let i = 0; i < niveles; i++) {
    result += "[-]";
    for (let j = 0; j < i; j++) {
      result += "[-]";
    }
    result += "\n";
  }
  return result;
};
//escalera(4);

/*
Dado un texto y una búsqueda, censurar todas las coincidencias
de la búsqueda en el texto con la palabra [-CENSURADO-]
Si el texto y la búsqueda están vacíos, mostrar: "No puedes leer el texto y la búsqueda" en el caso de
que ambos parámetros no lleguen.
Ejemplo: censurado("hola,hola","hola")
Output: 
[-CENSURADO-] [-CENSURADO-]
Ejemplo: censurado()
Output: 
"No puedes leer el texto y la búsqueda"
*/

const censored = (phrase, word) => {
  let resultado = "";
  if (!phrase && !word) return "No puedes leer el texto y la búsqueda";
  if (!word) return "No puedes hacer la búsqueda";
  return (resultado = phrase.replace(new RegExp(word, "gi"), "[-CENSURADO-]"));
};
//censored("hola hola", "hola")

/*
 Dado un número, mostrar todos los números desde ese al 0 de 8 en 8
 en una lista con guiones donde cada numero debe empezar por n°
Ejemplo: hastaCero(100)
Output: 
- n°100
- n°92
- n°84
- n°76
- n°68
- n°60
- n°52
- n°44
- n°36
- n°28
- n°20
- n°12
- n°4
*/

const untilZero = (number) => {
  let res = `--- From ${number} to 0 --- \n`;
  for (var index = number; index >= 0; index -= 8) {
    res += `- n°${index}\n`;
  }
  if (index <= 0) {
    res += `- n°0\n`;
  }
  return `${res} ---END---`;
};
//untilZero(100)

/*
Dado un array, dividirlo en tantos sub-arrays
como sea necesario basandonos en un numero que indique su tamaño
Dividirlo en arrays de x elementos
Ejemplo:
divideArray([7,8,9,10], 2)
OUTPUT:
[[7,8],[9,10]]
*/

const splitArray = (array, split) => {
  let arrays = [];
  array.forEach((element) => {
    let lastArray = arrays[arrays.length - 1];
    if (!lastArray || lastArray.length === split) {
      arrays.push([element]);
    } else {
      lastArray.push(element);
    }
  });

  return arrays;
};
//splitArray([7, 8, 9, 10], 2)

/*
Dado un string y un número, repetir el string tantas veces
como el número indique.
Ejemplo:
repet("alberto",2)
OUTPUT:
albertoalberto
*/

const repeat = (word, times) => {
  let text = "";
  for (let index = 0; index < times; index++) {
    text += word;
  }
  return text;
};
//repeat("alberto", 2)

const moreUse = (text) => {
  let obj = {};
  let max = 0;
  let moreUseCharacter = "";

  for (const element of text) {
    if (obj[element]) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  }

  for (const key in obj) {
    if (obj[key].toString().trim().length === 1 && obj[key] > max) {
      max = obj[key];
      moreUseCharacter = key;
    }
  }

  return `Lo que mas se repite es: ${moreUseCharacter}, ${max} veces`;
};
//moreUse(`he subido un nuevo video a mi canal de youtube victor robles`)

/*
Dado en una cadena de texto devolver cuantas vocales
a, e, i, o u. Tiene.
Ejemplo:
vocales("albertopimentel.com")
OUTPUT:
7
*/
const vocales2 = (texto) => {
  let coindicencias = texto.match(/[aeiou]/gi);
  return coindicencias ? coindicencias.length : 0;
};
//vocales2("albertopimentel.es")

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

//buzz(30)
/*
Dado un numero mostrar sus divisores
Ejemplo:
mostrarDivisores(5)
OUTPUT:
1
5
*/

const mostrarDivisores = (number) => {
  let res = "";
  for (let index = 1; index <= number; index++) {
    if (number % index === 0) {
      res += `${index}\n`;
    }
  }
  return res;
};
//mostrarDivisores(15)

/*
Dado un array de objetos de películas
(Título, director , vista) 
mostrar todas las películas indicando cuál has visto y cuál no 
Ejemplo:
myMovies(peliculas)
OUTPUT:
Ya has visto: "El señor de los anillos"
Te falta por ver: "La liga de la justicia"
*/
const movies = [
  {
    title: "El señor de los anillos",
    directedBy: "Peter Jackson",
    vista: true,
  },
  {
    title: "La liga de la justicia",
    directedBy: "Zack Snyder",
    vista: false,
  },
  {
    title: "Avengers End Game",
    directBy: "Joe Russo",
    vista: true,
  },
  {
    title: "Batman vs superman",
    directBy: "Zack Snyder",
    vista: false,
  },
];

const misPeliculas = (peliculas) => {
  result = "";
  for (const pelicula of peliculas) {
    let paraMostrar = `"${pelicula.title} de ${pelicula.directedBy}"`;
    if (pelicula.vista) {
      result += `Ya has visto: ${paraMostrar}\n`;
    } else {
      result += `Te falta por ver: ${paraMostrar}\n`;
    }
  }
  return result;
};
//misPeliculas(movies)

/*
Dadas tus cadenas de texto, crear un algoritmo que compruebe 
si son anagramas entre si.
una cadena es un anagrama de otra si usa los mismos caracteres 
en la misma cantidad 
No tener en cuenta espacio, símbolos raros, puntos etc.
Ejemplo:
1.- anagramas("Riesgo", "Sergio")
2.- anagramas("Victor", "Tobles")
OUTPUT:
1.- True
2.- False
*/
const anagramas = (word1, word2) => {
  word1 = word1.toLowerCase().replace(/[^\w]/gi, "").split("");
  word2 = word2.toLowerCase().replace(/[^\w]/gi, "").split("");

  word1.sort();
  word2.sort();

  return (
    word1.length == word2.length &&
    word1.every((element, index) => {
      return element === word2[index];
    })
  );
};
//anagramas("Riesgo", "Sergio")

/*
Dado una cadena de texto y un número, recortar el string 
mostrando los x primeros caracteres
Ejemplo:
recortar("Cursos Desarrollo Web",6 )
OUTPUT:
'Cursos'
*/

const cutText = (text, number) => {
  let newText = text.slice(0, number);
  return newText;
};
//cutText("Cursos Desarrollo Web", 6)

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

//mayorMenor(0, 0)

/*
dada una cadena de texto, poner en mayúscula la
primera letra de cada una de las palabras en la cadena y luego devolver la cadena de texto.
Ejemplo:
hola como estas mi hector
OUTPUT:
Hola Como Estas mi Hector
*/
const upper = (text) => {
  const fraseArray = text.split(" ").map((element) => {
    return element.slice(0, 1).toUpperCase() + element.slice(1);
  });

  return fraseArray.join(" ");
};
//upper("hola como estas mi hector")

/*
Dado un array de enteros y un número.
Detectar si esa lista de números es una permutación del 1 al número aportado.
En este caso una permutacion es una secuencua de numeros en orden sin que falte ninguno entre ellos
Ejemplo:
1.- console.log(permutacion([1, 2, 3, 4, 5], 5));
2.- console.log(permutacion([1, 2, 3, 5], 5));
OUTPUT:
1.- true
2.- false
*/

const permutacion = (array, numero) => {
  for (let index = 0; index < numero; index++) {
    if (array.indexOf(index + 1) < 0) {
      return false;
    }
  }
  return true;
};
//permutacion([1, 2, 3, 4, 5], 5)
//permutacion([1, 2, 3, 5], 5)

/*
Dado un string.
Ponerlo completo en mayúsculas o minúsculas, dependiendo de si hay más mayúsculas o minúsculas por
defecto en el string.
Si hay más mayúsculas ponerlo todo en mayúsculas 
Si hay más minúsculas, ponerlo todo en minúsculas.
EJEMPLO:
1.-mayusMinis("JOAQuin")
2.-mayusMinis("Victor")
OUTPUT:
1.- JOAQUIN
2.- victor
*/

const mayusMinus = (text) => {
  let mayus = 0;
  let minus = 0;
  for (const letra of text) {
    if (letra == letra.toUpperCase()) {
      mayus++;
    } else {
      minus++;
    }
  }
  if (mayus > minus) {
    text = text.toUpperCase();
  } else {
    text = text.toLowerCase();
  }

  return text;
};

//mayusMinus("JOAQuin")
//mayusMinus("Victor")

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

const fib2 = (number) => {
  const serie = [0, 1];
  for (let index = 2; index <= number; index++) {
    serie.push(serie[index - 1] + serie[index - 2]);
  }
  return `${serie.toString()}\nResultado de la serie fibonnacci: ${
    serie[serie.length - 1]
  } `;
};
//fib2(10)

/*
Dado un número mostrar cuántos años, meses y días equivalen.
EJEMPLO:
calcularDias(920)
OUTPUT:
Equivale a 2 años 6 meses y 10 dias
*/

const calculateDate = (number) => {
  const years = Math.floor(number / 365);
  let restDays = number % 365;
  const months = Math.floor(restDays / 30);
  restDays = restDays % 30;

  return `Equivale a ${years} años ${months} meses ${restDays} dias`;
};
//calculateDate(920)

/*
Dado un número devolver su factorial.
EJEMPLO:
5!
1 x 2 x 3 x 4 x 5
OUTPUT:
120
*/

const factorial = (number) => {
  let result = 1;
  for (let index = 1; index <= number; index++) {
    result = result * index;
  }
  return result;
};
//factorial(5)

/*
Dado un número, indicar si es un número capicúa o no.
Los número capicúa se leen igual de izquierda a derecha y viceversa.
EJEMPLO:
1.- capi(2002)
2.- capi(2014)
OUTPUT:
1.- true
2.- false
*/

const capi = (number) => {
  let string = number.toString().split("").reverse().join("");
  return parseInt(string) === number;
};
//capi(2002)
//capi(2014)

/*
Dado un array de números, devolver el array sin elementos
duplicados.
si hay un string eliminarlo del array.
EJEMPLO:
deleteDuplicates([1, 2, 1, 1, 1, 3, 4, "a"])
OUTPUT:
[1,2,3,4]
*/

const deleteDuplicates = (array) => {
  array = array.filter((element) => typeof element !== "string");
  return Array.from(new Set(array));
};
//deleteDuplicates([1, 2, 1, 1, 1, 3, 4, "a"])

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
//angle(47)
//angle(90)
//angle(145)
//angle(180)
//angle()

/*
Dado un array de numeros, devolver el array con sus numeros elevados al cuadrado.
EJEMPLO:
alCuadrado([5,6,7])
OUTPUT:
[25,36,49]
*/

const pow = (array) => {
  array = array
    .filter((element) => typeof element === "number")
    .map((element) => element * element);
  return array;
};
//pow([5, 6, 7, "victor", true, 8])

/*
Hacer un reloj que en tiempo real vaya mostrando la hora a cada segundo
Solo puedes usar el obejto date para 
conseguir la hora por primera vez, pero no para actualizar la hora
EJEMPLO:
let miReloj = new Reloj();
miReloj.encender()
OUTPUT:
14:20:16
*/
const relojRapido = () => {
  setInterval(() => {
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  }, 1000);
};
//relojRapido()

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
//calculadora(5, 5)

/*
Dado un array, crear otro con el
primer y el último elemento del array original.
EJEMPLO:
firstAndLast([100,200,300,780])
OUTPUT:
[100,780]
*/

const firstAndLast = (array) => {
  return [array[0], array[array.length - 1]];
};
//firstAndLast([100, 200, 300, 780])

/*
Dado un texto devolver cuantoas consonantes y cuentas vocales tiene
EJEMPLO:
cuentaLetrasVocales("victorRobes.es")
OUTPUT:
Consonantes:5
Vocales:6
*/
const cuentaLetrasVocales = (text) => {
  let vocales = 0,
    consonantes = 0;
  let cleanText = text.replace(/[.,!?¡¿0-9]/gi, "");

  for (const letra of cleanText) {
    if (/[áéíóúaeiou]/gi.test(letra)) {
      vocales++;
    } else {
      consonantes++;
    }
  }

  return `Consonantes:${consonantes}\nVocales:${vocales}`;
};
//cuentaLetrasVocales("victorRobles.es")

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
  let map = {};
  let count = 0;
  let mostValueRepeted;
  if (typeof data === "string") data = data.split(" ");

  for (let element of data) {
    if (map[element]) {
      map[element]++;
    } else {
      map[element] = 1;
    }
  }

  for (let key in map) {
    if (map[key] > count) {
      count = map[key];
      mostValueRepeted = key;
    }
  }
  return mostValueRepeted;
};
//mostRepeated("alberto pimentel alberto")
//mostRepeated([1, 2, 3, 4, 1,])

/*
Dado un numero mostrar un listado de los cuadrados de todos los numeros naturales hasta llegar 
hasta el mismo
EJEMPLO:
 cuadrados(4)
OUTPUT:
1
4
9
16
*/
const cuadrados = (number) => {
  for (let index = 1; index <= number; index++) {
    console.log(index * index);
  }
};
//cuadrados(4)

/*
Dado un texto, comprobar que sea un email válido.
EJEMPLO:
checkEmail("albertopimentel@gmail.com")
OUTPUT:
true
*/
const checkEmail = (mail) => {
  return /^\w+@\w+\.\w+$/gi.test(mail);
};
//checkEmail("albertopimentel@gmail.com")

/*
Dado un arreglo devolver el valor mas bajo y el valor mas alto
EJEMPLO:
altoBajo([1,2,3,4,5])
OUTPUT:
{
  bajo:1
  alto:5
}
*/
const bajoAlto = (array) => {
  array = array.sort((a, b) => a - b);
  return {
    bajo: array[0],
    alto: array[array.length - 1],
  };
};
//bajoAlto([2, 1, 3, 5, 4, 11])

/*
Dado un número, mostrar un triángulo de
asteriscos con ese número de filas.
EJEMPLO:
createPyramid(4)
OUTPUT:
   *
  ***
 *****
*******
*/
function createPyramid(rows) {
  let mitad = Math.floor(rows - 1);
  let resultado = "";
  //Bucle para filas
  for (let fila = 0; fila < rows; fila++) {
    let nivel = "";
    //bucle para pintar asteriscos
    for (let columna = 0; columna < rows * 2 - 1; columna++) {
      if (mitad - fila <= columna && mitad + fila >= columna) {
        nivel += "*";
      } else {
        nivel += " ";
      }
    }
    resultado += nivel + "\n";
  }
  return resultado;
}
//createPyramid(4)

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

//random(1, 100)

/*
Dado un array de números, sacar la media
de todos ellos.
EJEMPLO:
media([1,2,3])
OUTPUT:
2
*/
const media2 = (array) => {
  return array.reduce((acum, val) => acum + val, 0) / array.length;
};
//media2([1, 2, 3, 4, 5, 6])

/*
Dado un array de strings o de cadenas de texto, devolver otro
con los valores que estén formados por más de dos palabras
EJEMPLO:
words(["hola", "san franciso", "ciudad real", "alberto"])
OUTPUT:
["san francisco", "cidudad real"]
*/
const words = (array) => {
  return array.filter((element) => element.includes(" "));
};
//words(["hola", "san franciso", "ciudad real", "alberto"])

/*
Dada una red de alumnos (nombre y nota), mostrar cuántos alumnos están reprobados
y cuántos están aprobados.
EJEMPLO:
 reprobados([
    ["alberto", 10],
    ["Juan", 5],
    ["Pepe", 4],
    ["Maria", 8],
    ["Martha", 3],
  ])
OUTPUT:
Aprobados:2
Reprobados:3
*/

const reprobados = (array) => {
  let apro = 0;
  let repro = 0;

  array.forEach((element) => {
    if (element[1] > 5) {
      apro++;
    } else {
      repro++;
    }
  });

  return { aprobados: apro, reprobados: repro };
};

/*
reprobados([
    ["alberto", 10],
    ["Juan", 5],
    ["Pepe", 4],
    ["Maria", 8],
    ["Martha", 3],
  ])*/

/*
Dado un string.
Devolver todos los posibles sub string.
EJEMPLO:
allSubstrings("Hola")
OUTPUT:
['h','o','l','a'
'ho' 'ol','la','hol'
'ola' 'hola'
]
*/

const allSubstrings = (text) => {
  let substrings = [];
  for (const letra in text) {
    let comienzo = parseInt(letra);

    for (let i = 0; i <= text.length - comienzo; i++) {
      let final = parseInt(i) + parseInt(comienzo);
      substrings.push(text.substring(comienzo, final));
    }
  }
  return substrings.filter((element) => element !== "");
};
//allSubstrings("hola")

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
*/

const aficiones = (data) => {
  let map = {};
  data.forEach((element) => {
    for (const aficion of element.aficiones) {
      if (map[aficion]) {
        map[aficion]++;
      } else {
        map[aficion] = 1;
      }
    }
  });
  return map;
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
//aficiones(users)

/*
Dado un string.
Devolver cuáles son las letras que aparecen sólo una vez
Y cuál es la primera
EJEMPLO:
soloUnaVez("frase frase HOY")
OUTPUT:
[["H", "O", "Y"], "H"]
*/
const soloUnaVez = (text) => {
  let contadores = {};
  let resultado = [];
  text = text.replace([/ ,./], "");

  for (letra of text) {
    if (contadores[letra]) {
      contadores[letra]++;
    } else {
      contadores[letra] = 1;
    }
  }

  for (const key in contadores) {
    if (contadores[key] === 1) {
      resultado.push(key.toUpperCase());
    }
  }

  return [resultado, resultado[0]];
};
//soloUnaVez("frase frase hoy")

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
//existePropiedad(usuario, "nombre")

/*
dado un número devolver cuántos bucles tiene
Un numero tiene un bucle cuando tiene un circulo cerrado
cuando lo dibujas, por lo que 6 tiene un bucle,
1 n tiene bucle y 8 tiene dos bucles
EJEMPLO:
bucles(28861)
OUTPUT:
5
*/
const bucles = (number) => {
  let arrayNumeros = number.toString().split("");
  let bucles = 0;
  for (let numero of arrayNumeros) {
    numero = parseInt(numero);
    if (numero === 0 || numero === 6 || numero === 9) {
      bucles++;
    } else if (numero === 8) {
      bucles += 2;
    }
  }
  return bucles;
};
//bucles(28861)

/*
Dado una array de números, devolver un array nuevo con los numeros pares e imapres por separados
EJEMPLO:
pares([1,2,3,4])
OUTPUT:
{
  pares:[2,4]
  impares:[1,3]
}
*/
const pares = (array) => {
  return {
    pares: array.filter((element) => element % 2 === 0),
    impares: array.filter((element) => element % 2 !== 0),
  };
};
//pares([1, 2, 3, 4])

/*
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(data) {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
}

/*

let tree = new BinarySearchTree();
tree.insert(8);
tree.insert(3);
tree.insert(2);
tree.insert(6);
tree.insert(10);
tree.insert(9);
tree.insert(14);

tree.inOrder(tree.root)

console.log(tree);

*/

/*

const sumaMinMax = (array) =>{
  let min = array[0]
  let max = array[0]
  for(let value of  array){
    if(value < min){
      min = value
    }else if (value > max){
      max = value
    }
  }
  return min + max
}

sumaMinMax([1,2,3,4,56,7,8,10]) //57
sumaMinMax([1,1,1,2,10]) //11

*/
/*
const binarySearch = (array, target) => {
  let izq = 0;
  let der = array.length - 1;

  while (izq <= der) {
    let medio = Math.floor((izq + der) / 2);
    let intento = array[medio];
    if (intento === target) {
      return medio;
    } else if (intento < target) {
      izq = medio + 1;
    } else {
      der = medio - 1;
    }
  }
};
binarySearch([1, 2, 3, 4, 5, 6], 4);

*/

const values = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

function romanToInt(string) {
  let result = 0,
    current,
    previous = 0;
  for (const char of string.split("").reverse()) {
    console.log(char);
    current = values.get(char);
    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }
    previous = current;
  }
  return result;
}

//romanToInt("MCMXCIV")

const images = [
  {
    name: "sky",
    width: "90",
    height: "150",
    colours: ["pink", "yellow", "red"],
    price: "64",
  },
  {
    name: "old car",
    width: "90",
    height: "150",
    colours: ["dark purple", "sand", "light green"],
    price: "35",
  },
  {
    name: "landscape",
    width: "90",
    height: "150",
    colours: ["dark blue", "violet"],
    price: "85",
  },
  {
    name: "kitchen",
    width: "90",
    height: "150",
    colours: ["red", "green"],
    price: "38",
  },
];

let myArr = [...Array(2)].map((_, i) => {
  return {
    ...images[i],
  };
});

//console.log(myArr);

function quickSort(array) {
  if (array.length === 0) return [];
  let medio = Math.floor(array.length / 2);
  let pivote = array[medio];
  let izquierda = [];
  let derecha = [];

  for (let [index, value] of array.entries()) {
    if (index !== medio) {
      if (value > pivote) {
        derecha.push(value);
      } else {
        izquierda.push(value);
      }
    }
  }
  izquierda = quickSort(izquierda);
  derecha = quickSort(derecha);

  return izquierda.concat(pivote).concat(derecha);
}

//quickSort([5, -1, 4, 2, 1, -7, 0, -14, 14]);

const reverse = (array) => {
  let longitud = array.length;
  for (let i = 0; i < longitud / 2; i++) {
    let element = array[i];
    let ultimo = longitud - i - 1;

    array[i] = array[ultimo];
    array[ultimo] = element;
  }
  return array;
};

//reverse([1, 2, 3, 4, 5, 6]);

const twoSum = (array, target) => {
  let map = {};

  for (let [index, value] of Object.entries(array)) {
    map[value] = {
      indice: index,
    };

    if (map[target - value]) {
      return [map[target - value].indice, index];
    }
  }
};

//twoSum([1,2,3,4,5,6,7,8],7)

function multiplica(c, d) {
  var r = 0;
  for (var i = 1; i <= c; i++) r = r + d;
  return r;
}
/*
console.log(
  multiplica(2,-3),
  multiplica(3,4),
  multiplica(4,5),
  multiplica(5,6),
   multiplica(6,5)
);
*/

const doubleScore = (number) => {
  let result = number * 2;
  return result;
};

const sumTwoPrevScore = (number1, number2) => {
  let result = parseInt(number1) + parseInt(number2);
  return result;
};

const sumTotalScore = (array) => {
  array = array.map((element) => parseInt(element));
  let result = array.reduce((current, total) => current + total, 0);
  return result;
};

const baseball = (ops) => {
  let currentScore = [];
  let newScore;
  let prevScore = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i].match(/[0-9]/)) {
      currentScore.push(ops[i]);
      prevScore.push(ops[i]);
    }
    if (ops[i] === "C") {
      currentScore.pop();
    }
    if (ops[i] === "D") {
      newScore = doubleScore(prevScore[prevScore.length - 2]);
      currentScore.push(newScore);
    }
    if (ops[i] === "+") {
      currentScore.push(
        sumTwoPrevScore(
          currentScore[currentScore.length - 1],
          currentScore[currentScore.length - 2]
        )
      );
    }
  }
  return sumTotalScore(currentScore);
};

//baseball(["5","-2","4","C","D","9","+","+"]);

const twoSumD = (array, target) => {
  let map = {};

  for (let [index, value] of Object.entries(array)) {
    map[value] = {
      indice: index,
    };

    if (map[target - value]) {
      return [map[target - value].indice, index];
    }
  }
};

//twoSumD([1, 2, 3, 4, 5, 6], 3);

function diagonalDifference(arr) {
  // Write your code here
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let conta = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][conta];
    conta--;
  }

  return Math.abs(firstDiagonal - secondDiagonal);
}

/*
diagonalDifference([
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
]);
*/

function plusMinus(arr) {
  let n = arr.length;
  let positives = 0;
  let negatives = 0;
  let zero = 0;
  // Write your code here

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives++;
    }
    if (arr[i] < 0) {
      negatives++;
    }
    if (arr[i] == 0) {
      zero++;
    }
  }

  console.log((positives / n).toFixed(6));
  console.log((negatives / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}

//plusMinus([1,1,0,-1,-1]);

function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

//staircase(4);

function miniMaxSum(arr) {
  let min = 0;
  let max = 0;

  arr = arr.sort();

  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  for (let i = 1; i < arr.length; i++) {
    max += arr[i];
  }

  console.log(min, max);
}

//miniMaxSum([8,1,3,5,7,9])

function birthdayCakeCandles(candles) {
  // Write your code here
  let count = 0;
  let max = 0;
  max = candles[0];
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] >= max) {
      max = candles[i];
    }
  }

  for (const element of candles) {
    if (element === max) {
      count++;
    }
  }

  return count;
}

//birthdayCakeCandles([4, 4, 1, 3])

function timeConversion(s) {
  const mapPM = {
    "01": "13",
    "02": "14",
    "03": "15",
    "04": "16",
    "05": "17",
    "06": "18",
    "07": "19",
    "08": "20",
    "09": "21",
    10: "22",
    11: "23",
    12: "12",
  };

  const mapAM = {
    12: "00",
    "01": "01",
    "02": "02",
    "03": "03",
    "04": "04",
    "05": "05",
    "06": "06",
    "07": "07",
    "08": "08",
    "09": "09",
    10: "10",
    11: "11",
  };

  s = s.split("");

  let firstValue = s.slice(0, 2).join("");
  let value = firstValue;

  if (s.includes("P")) {
    firstValue = mapPM[value];
  }

  if (s.includes("A")) {
    firstValue = mapAM[value];
  }

  let nuevaFecha = s.splice(2, 6);

  return [firstValue, ...nuevaFecha].join("");
}

//timeConversion("12:05:45AM")

function gradingStudents(grades) {
  let result = [];

  for (let i = 0; i < grades.length; i++) {
    let diference = (grades[i] % 5) - 5;

    if (grades[i] < 38) {
      result.push(grades[i]);
    } else if (grades[i] - grades[i] + Math.abs(diference) < 3) {
      result.push(grades[i] + Math.abs(diference));
    } else {
      result.push(grades[i]);
    }
  }

  return result;
}

gradingStudents([73, 67, 38, 33]);

//Memorizacion
const memoization = (callback) => {
  let result = {};
  return function (...args) {
    if (!result[`${args[0] - args[1]}`]) {
      result[`${args[0] - args[1]}`] = callback(args[0], args[1]);
    }
    return result[`${args[0] - args[1]}`];
  };
};

const suma = memoization((start, limit) => {
  let result = 0;
  for (let i = start; i < limit; i++) {
    result += i;
  }
  return result;
});

//suma(2,100)

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let apple = 0;
  let orange = 0;

  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      apple++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    if (b + oranges[i] >= s && b + oranges[i] <= t) {
      orange++;
    }
  }

  console.log(apple);
  console.log(orange);
}

//countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

function kangaroo(x1, v1, x2, v2) {
  if (v2 < v1) {
    let valueXModulus = (x2 - x1) % (v1 - v2);
    if (valueXModulus === 0) {
      return "YES";
    }
  }
  return "NO";
}

//kangaroo(0, 2, 5, 3);

const integerToRoman = (number) => {
  let romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (number >= values[i]) {
      number = number - values[i];
      result += romans[i];
    }
  }

  return result;
};

//integerToRoman(150);

function getMeta(url, callback) {
  let img = new Image();
  img.src = url;
  img.onload = function () {
    callback(this.width, this.height);
  };
}

/*
getMeta( "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
  function(width, height) { console.log(width + 'px ' + height + 'px') }
)
*/

const aspectRatio = (a, b) => {
  return b == 0 ? a : aspectRatio(b, a % b);
};

//aspectRatio(1024, 768);

const decimalToBinary = (decimal) => {
  let result = "";
  while (decimal >= 1) {
    decimal = Math.floor(decimal);
    if (decimal % 2 == 0) {
      result += "0";
    } else {
      result += "1";
    }
    decimal = decimal / 2;
  }

  return result.split("").reverse().join("");
};

decimalToBinary(8);

const stringToMorse = (text) => {
  let morse = {
    A: ".—",
    N: "—.",
    0: "—————",
    B: "—...",
    Ñ: "——.——",
    1: ".————",
    C: "—.—.",
    O: "———",
    2: "..———",
    CH: "————",
    P: ".——.",
    3: "...——",
    D: "—..",
    Q: "——.—",
    4: "....—",
    E: ".",
    R: ".—.",
    5: ".....",
    F: "..—.",
    S: "...",
    6: "—....",
    G: "——.",
    T: "—",
    7: "——...",
    H: "....",
    U: "..—",
    8: "———..",
    I: "..",
    V: "...—",
    9: "————.",
    J: ".———",
    W: ".——",
    ".": ".—.—.—",
    K: "—.—",
    X: "—..—",
    ",": "——..——",
    L: ".—..",
    Y: "—.——",
    "?": "..——..",
    M: "——",
    Z: "——..",
    '"': ".—..—.",
    "/": "—..—.",
  };
  let result = "";

  text = text.toUpperCase().split("");

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "C" && text[i + 1] === "H") {
      result += morse["CH"] + " ";
      i++;
    } else {
      result += morse[text[i]] + " ";
    }
  }
  return result;
};

//Cambiar de texto a codigo morse
//stringToMorse("chocholate");




function getTotalX(a, b) {
  let result = 0;
  let lcm = a[0];
  let gcd = b[0];
  let multiple = 0;

  for (let element of a) {
    lcm = getLCM(lcm, element);
  }

  for (let element of b) {
    gcd = getGCD(gcd, element);
  }

  while (multiple <= gcd) {
    multiple += lcm;

    if (gcd % multiple == 0) {
      result++;
    }
  }
  return result;
}

function getLCM(a, b) {
  if (a == 0 || b == 0) {
    return 0;
  } else {
    let gcd = getGCD(a, b);
    return Math.abs(a * b) / gcd;
  }
}

function getGCD(a, b) {
  if (b == 0) {
    return a;
  }
  return getGCD(b, a % b);
}

getTotalX([2, 4], [16, 32, 96]);



//maximoComunDivisor
const maximoComunDivisor = (a, b) => {
  let temporal; //Para no perder b
  while (b !== 0) {
    temporal = b;
    b = a % b;
    a = temporal;
  }
  return a;
};


//Conjuntos
const conjuntos = (array, array2, isCommun) => {
  let union = array.concat(array2).sort();

  let comunes = array.filter((el) => array2.includes(el));

  return isCommun ? comunes : union.filter((el) => !comunes.includes(el));
};

conjuntos([1, 2, 3, 4, 5], [2, 2, 3, 3, 3, 4, 6], true);





/*
Dado un string.
Devolver todos los posibles sube string.

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

console.log(allSubstrings("hola"));

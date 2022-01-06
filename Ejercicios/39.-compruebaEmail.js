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

console.log(checkEmail("albertopimentel@gmail.com"));

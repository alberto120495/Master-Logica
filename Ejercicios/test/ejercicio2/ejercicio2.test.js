const isPalindrome = require("../../Ejercicio-2");

test("debe comprobar si la funcion esta definida", () => {
  expect(isPalindrome).toBeDefined();
});

test("debe comprobar si es palindromo", () => {
  expect(isPalindrome("otto")).toEqual(true);
});

test("debe comprobar si NO es palindromo", () => {
  expect(isPalindrome("victor")).toEqual(false);
});

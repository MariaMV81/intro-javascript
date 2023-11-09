/**
 *  Ejercicio 15
 *  Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
 *  la funcion te vuelva a pedir que introduzcas otro numero.
 */

let readline = require("readline-sync");

function parImparNulo(numero = null) {
  let number;

  if (numero === null) {
    number = Number(readline.question("Dime un numero: "));
  } else {
    number = numero;
  }

  while (number === 0 || isNaN(number)) {
    console.log("Error: Debes introducir un número distinto de cero.");
    number = Number(readline.question("Introduce otro numero: "));
  }

  if (number % 2 === 0) {
    return "El numero es par";
  } else {
    return "El numero es impar";
  }
}

module.exports = { parImparNulo };


//No soy capaz de ponerlo bien
/**
 *  Ejercicio 15
 *  Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
 *  la funcion te vuelva a pedir que introduzcas otro numero.
 */


let readline = require("readline-sync");

// let introduceNumero = Number(readline.question("Dime un numero: "));

function parImparNulo(number) {

  while (number === 0) {
    number = Number(readline.question("Introduce otro numero distinto de 0: "));
  }

  if (number % 2 == 0) {
    return "El numero es par";
  } else {
    return "El numero es impar";
  }
}

module.exports = { parImparNulo };

//No soy capaz de ponerlo bien
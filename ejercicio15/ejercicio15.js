/**
 *  Ejercicio 15
 *  Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
 *  la funcion te vuelva a pedir que introduzcas otro numero.
 */


const prompt = require("prompt-sync")();

let number = Number(prompt("Introduce un número: "));

function parImparNulo() {
  

  while (number === 0) {
    number = Number(prompt("Introduce un número: "));
  }

  if (number % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
}

module.exports = { parImparNulo };

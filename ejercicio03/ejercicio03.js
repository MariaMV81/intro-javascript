/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */

const { CLIENT_RENEG_LIMIT } = require("tls");

function compareThreeNumbers() {
  
    let num1;
    let num2;
    let num3;

 if (num1 > num2 && num1 > num3){
  console.log(`El número mayor es: ${num1}`)
 } else if ( num2 > num1 && num2 > num3){
  console.log(`El número mayor es: ${num2}`)
 } else if ( num3 > num1 && num3 > num2){
  console.log(`El número mayor es: ${num3}`)
 } else{
  console.log("Los números son iguales")
 }
}

compareThreeNumbers(3,5,7)

module.exports = { compareThreeNumbers };

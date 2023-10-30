/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */


function compareThreeNumbers(num1, num2, num3) {

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

const resultado = compareThreeNumbers(3, 5, 7);
console.log(resultado);

module.exports = { compareThreeNumbers };

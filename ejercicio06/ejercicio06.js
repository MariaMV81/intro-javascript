/**
 *  Ejercicio 6
 *  Crea un algoritmo que reciba un numero y determine si,
 *  el numero es 0, el numero es par o el numero es impar.
 *  Pista: para determinar el resto de una división, se usa la operación módulo %.
 */

function parImparNulo() {
 if ( num === 0){
    console.log(`El número introducido es 0`)
 } else if ( num % 2 === 0){
    console.log(`El número introducido es par : ${num}`)
 } else{
    console.log(`El número intruducido es impar: ${num}`)
 }
}

module.exports = { parImparNulo };

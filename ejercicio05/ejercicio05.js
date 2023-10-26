/**
 *  Ejercicio 5
 *  Construir un algoritmo que reciba un numero entero y retorne
 *  un string que nos indique si es positivo, negativo o nulo.
 *  Debes tener en cuenta la opcion de que no se introduzca un
 *  numero.
 */

function determinarTipoNumero() {
 

 if (num < 0){
    console.log(`El número instroducido es negativo`)
 } else if ( a > 0){
    console.log(`El número introducido es positivo`)
 } else if ( a === 0){
    console.log(`El número introducido es nulo`)
 } else {
    console.log(`No ha introducido un número`)
 }
}

module.exports = { determinarTipoNumero };

/**
 *  Ejercicio 8
 *  Crea un algoritmo que reciba el sueldo de un trabajador y
 *  aplique un incremento del 15% si el sueldo es inferior a 1000€.
 *  El algoritmo debera retornar el nuevo salario.
 */

const { CLIENT_RENEG_LIMIT } = require("tls");

function incrementarSueldo() {

let readline = require("readline-sync"); /** Esto sirve para importar la libreria*/

 let sueldoTrabajador = Number(readline.question("Introduzca su sueldo: "));

 if (sueldoTrabajador < 1000){
    console.log(`Su salario es inferior al minimo establecido, tiene un aumento del 15%, su nuevo salario es: ${sueldoTrabajador * 1.15 }`)
 } else{
    console.log("Disfrute de su salario")
 }

}

module.exports = { incrementarSueldo };

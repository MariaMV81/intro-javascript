/**
 *  Ejercicio 8
 *  Crea un algoritmo que reciba el sueldo de un trabajador y
 *  aplique un incremento del 15% si el sueldo es inferior a 1000€.
 *  El algoritmo debera retornar el nuevo salario.
 */



// function incrementarSueldo(sueldoTrabajador) {

// let readline = require("readline-sync"); 

//  let sueldoTrabajador = Number(readline.question("Introduzca su sueldo: "));

//  if (sueldoTrabajador < 1000){
//     return `Su salario es inferior al minimo establecido, tiene un aumento del 15%, su nuevo salario es: ${sueldoTrabajador * 1.15 }`
//  } else{
//     return "el sueldo se mantiene igual al no ser inferior a 1000";
//  }

// }





// module.exports = { incrementarSueldo };


function incrementarSueldo(sueldoTrabajador) {
  if (sueldoTrabajador < 1000) {
    // Aplicar un aumento del 15% al sueldo si es inferior a 1000€.
    const nuevoSueldo = sueldoTrabajador * 1.15;
    return nuevoSueldo;
  } else {
    return sueldoTrabajador;
  }
}

module.exports = { incrementarSueldo };

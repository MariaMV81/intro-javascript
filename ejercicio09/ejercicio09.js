/**
 *  Ejercicio 9
 *  Construir un algoritmo que reciba 5 calificaciones de un alumno y retorne el promedio
 *  junto con la palabra "aprobado" (recuerda la concatenacion y el uso de ``) si el alumno tiene un promedio
 *  mayor o igual a 5, y "no aprobado" en caso contrario.
 *  En caso de que se introdujera alguno 'no numero' el algoritmo debera retornar un string
 *  diciendo 'Debes introducir sólo números. Inténtalo de nuevo'
 */

function notaMedia() {
  
  let readline = require("readline-sync"); /** Esto sirve para importar la libreria*/

  let calificacion1 = Number(readline.question("Primera calificación: "));
  let calificacion2 = Number(readline.question("Segunda calificación: "));
  let calificacion3 = Number(readline.question("Tercera calificación: "));
  let calificacion4 = Number(readline.question("Cuarta calificación: "));
  let calificacion5 = Number(readline.question("Quinta calificación: "));

  let suma =
    calificacion1 +
    calificacion2 +
    calificacion3 +
    calificacion4 +
    calificacion5;

  let media;
  media = suma / 5;

  if (promedio >= 5){
    console.log(`Aprovado!!! Su nota media es: ${media}`)
  } else if (promedio < 5){
    console.log(`Suspenso, Su nota media es:${media}`)
  } else{
    console.log("Debes introducir sólo números. Inténtalo de nuevo");
  }
}

module.exports = { notaMedia };

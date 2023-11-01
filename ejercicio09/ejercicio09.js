/**
 *  Ejercicio 9
 *  Construir un algoritmo que reciba 5 calificaciones de un alumno y retorne el promedio
 *  junto con la palabra "aprobado" (recuerda la concatenacion y el uso de ``) si el alumno tiene un promedio
 *  mayor o igual a 5, y "no aprobado" en caso contrario.
 *  En caso de que se introdujera alguno 'no numero' el algoritmo debera retornar un string
 *  diciendo 'Debes introducir sólo números. Inténtalo de nuevo'
 */

function notaMedia(
  calificacion1,
  calificacion2,
  calificacion3,
  calificacion4,
  calificacion5
) {
  // Verificar si todas las calificaciones son números.
  if (
    isNaN(calificacion1) ||
    isNaN(calificacion2) ||
    isNaN(calificacion3) ||
    isNaN(calificacion4) ||
    isNaN(calificacion5)
  ) {
    return "Debes introducir solo numeros. Intentalo de nuevo";
  }

  // Calcular la suma y la media de las calificaciones.
  const suma =
    calificacion1 +
    calificacion2 +
    calificacion3 +
    calificacion4 +
    calificacion5;
  const media = suma / 5;

  if (media >= 5) {
    return `${media} aprobado` ;
  } else {
    return `${media} suspenso`;
  }
}

module.exports = { notaMedia };


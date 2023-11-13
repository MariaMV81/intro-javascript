/**
 * Ejercicio 53
 * Usar una funcion para calcular el promedio recibiendo un array.
 */

function getAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  return suma / array.length;
}

module.exports = { getAverage };

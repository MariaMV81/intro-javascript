/**
 * Ejercicio 39
 * Desarollar un algoritmo que compruebe si los dos arrays introducidos son iguales
 */

function sonIguales(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // Si los arrays tienen diferentes longitudes, no pueden ser iguales.
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Si encuentras elementos diferentes en las mismas posiciones, los arrays no son iguales.
    }
  }

  return true; // Si no se encontraron diferencias, los arrays son iguales.
}
module.exports = { sonIguales };

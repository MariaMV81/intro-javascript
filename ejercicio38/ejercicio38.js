/**
 * Ejercicio 38
 * Desarollar un algoritmo que nos retorne el array introducido por
 * parametros invertido.
 */

function invertArray(arr) {
  const invertedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    invertedArray.push(arr[i]);
  }
  return invertedArray;
}


module.exports = { invertArray };

/**
 * Ejercicio 35
 * Algoritmo que, cuando reciba un array, retorne la suma de todos los numeros contenidos en el mismo
 */

function sumNumberArray(array) {
   let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

sumNumberArray([1, 2, 4, 5, 6]);

module.exports = { sumNumberArray };

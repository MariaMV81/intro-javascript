/**
 * Ejercicio 48
 * Crear un algoritmo que reciba un array de nombres y los devuelva ordenados
 * alfabeticamente.
 *
 * Pista: Los datos alfanumerico (strings) tambien se pueden comparar con los operadores
 * '<' y '>'
 */

function ordenarArray(array) {
  const longitud = array.length;

  for (let i = 0; i < longitud - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < longitud; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Intercambiar los elementos en minIndex e i
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

module.exports = { ordenarArray };

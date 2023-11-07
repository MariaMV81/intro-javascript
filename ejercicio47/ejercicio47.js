/**
 * Ejercicio 47
 * Generar un algoritmo que reciba un array y retorne otro con los numeros ordenados de forma descendente
 */

function ordenar(array) {
  const longitud = array.length;

  for (let i = 0; i < longitud - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < longitud; j++) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      // Intercambiar los elementos en maxIndex e i
      const temp = array[i];
      array[i] = array[maxIndex];
      array[maxIndex] = temp;
    }
  }

  return array;
}

module.exports = { ordenar };

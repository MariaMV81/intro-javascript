/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */

function mediaArrayHastaMenosUno(array) {
  let suma = 0;
  let cantidadNumeros = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      // Si encontramos un -1, dejamos de sumar números y salimos del bucle
      break;
    }
    suma += array[i];
    cantidadNumeros++;
  }

  if (cantidadNumeros === 0) {
    return 0;
  }

  return suma / cantidadNumeros;
}

module.exports = { mediaArrayHastaMenosUno };

/**
 * Media aritmetica: se calcula sumando un grupo de números y 
 * dividiendo a continuación por el recuento de dichos números. 
 * Por ejemplo, el promedio de 2, 3, 3, 5, 7 y 10 es 30 dividido por 6, que es 5.
 */

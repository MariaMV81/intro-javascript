/**
 * Ejercicio 40
 * Generar un array de 20 elementos con numeros aleatorios no repetidos entre si
 */

function generarArrayNoRepetidos() {
  const array = [];

  while (array.length < 20) {
    const numeroAleatorio = (Math.random() * 100) | 0; // Genera un número entero entre 0 y 99.

    if (!array.includes(numeroAleatorio)) {
      array.push(numeroAleatorio);
    }
  }

  return array;
}

module.exports = { generarArrayNoRepetidos };

/**
 * Ejercicio 41
 * Generar un algoritmo que genere un array aleatorio con longitud y numero maximo
 * introducido por parametros.
 *
 * Retornar el promedio de los numeros positivos, cuantos numeros son mayores que 0 y
 * el promedio de todos los numeros
 */

function generarArray() {
  const array = [];

  for (let i = 0; i < array.length; i++) {
    const numeroAleatorio = Math.floor(Math.random() * (numeroMaximo + 1));
    array.push(numeroAleatorio);
  }

  return array;
}

function calculosArray(array) {
  const numerosPositivos = array.filter((numero) => numero > 0);
  const cantidadPositivos = numerosPositivos.length;
  const sumaPositivos = numerosPositivos.reduce(
    (total, numero) => total + numero,
    0
  );

  const cantidadTotal = array.length;
  const sumaTotal = array.reduce((total, numero) => total + numero, 0);

  const promedioPositivos =
    cantidadPositivos > 0 ? sumaPositivos / cantidadPositivos : 0;
  const promedioTotal = cantidadTotal > 0 ? sumaTotal / cantidadTotal : 0;

  return {
    promedioPositivos,
    cantidadPositivos,
    promedioTotal,
  };
}


module.exports = { generarArray, calculosArray };

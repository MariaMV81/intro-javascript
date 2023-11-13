/**
 * Ejercicio 52
 *  Rellenar un array con una longitud 10 y
 *  numeros aleatorios entre 1 y 15.
 *  Posteriormente, hacer un algoritmo que reciba este array
 *  aleatorio y un numero introducido por parametros que nos diga
 *  si este numero esta incluido en el array o no. El algoritmo retornara
 *  true si se encuentra el numero y false si no;
 */

function generateRandomArray() {
  const randomArray = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = 1 + Math.floor(Math.random() * 15);
    randomArray.push(randomNumber);
  }
  return randomArray;
}

function findNumberInArray(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true;
    }
  }
  return false;
}

module.exports = { findNumberInArray, generateRandomArray };


/**
  * Math.random() genera un número decimal aleatorio entre 0 y 1 .
  * Math.random() * 15 escala ese número a un rango entre 0 y 15 , ya que Math.random() genera valores en el rango de [0, 1) y multiplicarlo por 15 amplía ese rango a [0, 15).
  * Math.floor() redondea hacia abajo el número resultante, lo que garantiza que esté en el rango de enteros entre 0 y 14.
  * Al sumarle 1 al resultado final (1 + Math.floor(Math.random() * 15)), tras el redondeo hacia abajo, se asegura de que los números estén en el rango entre 1 y 15.
 */

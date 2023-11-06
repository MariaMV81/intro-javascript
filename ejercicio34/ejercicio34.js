/** Ejercicio 34
 * a) Generar un numero aleatorio (del 1 al 10) que el usuario debe adivinar.
 * b) Crear un algoritmo que reciba un array con longitud 10 de numeros en el que utilizando un bucle
 *    while que calcule en que posicion del array se encuentra el numero que buscamos.
 *
 *  Si el numero aleatorio es 5 y tu array es [9,3,4,5,6,2,4] la solucion sera que has acertado
 *  al cuarto intento.
 */

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio del 1 al 10
}

function playGame(randomNumber, arrayNum) {
  let intentos = 0;
  let encontrado= false;

  while (!encontrado && intentos < arrayNum.length) {
    if (arrayNum[intentos] === randomNumber) {
      encontrado= true;
    } else {
      intentos++;
    }
  }

  if (encontrado) {
    return `Exacto, has acertado en el ${intentos + 1} intento! el numero era el ${intentos + 1}`;
  } else {
    return "Ninguno de los numeros introducido coincide con el creado aleatoriamente";
  }
}

module.exports = {
  generateRandomNumber,
  playGame,
};

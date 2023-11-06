/**
 *  Ejercicio 30
 *  Escribir un algoritmo para cada apartado que retorne un triangulo como los mostrados
 *  a continuacion hasta un numero de filas introducidos por teclado. El algoritmo recibira el
 *  numero de filas por parametros.
 *  Si ponemos 4 los triangulos serán asi:
 *
 *  a) 1
 *     12
 *     123
 *     1234
 *
 * b) 1
 *    22
 *    333
 *    4444
 *
 * c) 1
 *    23
 *    456
 *    78910
 *
 *  Recuerda la concatenacion y el uso de espacios en blanco (\n)
 */

// Apartado A --------------------------------------------------------------------------

function trianguloConsola(filas) {
  for (let i = 1; i <= filas; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += j;
    }
    return linea;
  }
}

// Apartado B --------------------------------------------------------------------------
function trianguloConsolaB(filas) {
  for (let i = 1; i <= filas; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += i;
    }
    return linea;
  }
}

// Apartado C --------------------------------------------------------------------------
function trianguloConsolaC(filas) {
  let numero = 1;
  for (let i = 1; i <= filas; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += numero++;
    }
    return linea;
  }
}

module.exports = { trianguloConsola, trianguloConsolaB, trianguloConsolaC };

/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */

const readline = require("readline");

function maxMinAverageUntilZero() {
  
  let numero;
  let suma = 0;
  let maximo = -Infinity;
  let minimo = Infinity;
  let contador = 0;

  const leerNumero = () => {
    readline.question("Introduce un número (0 para finalizar):", (respuesta) => {
      numero = parseFloat(respuesta);

      if (!isNaN(numero)) {
        suma += numero;
        contador++;
        maximo = Math.max(maximo, numero);
        minimo = Math.min(minimo, numero);
      }

      if (numero !== 0) {
        leerNumero();
      } else {
        rl.close();
        if (contador === 0) {
          console.log("No se ingresaron números válidos.");
        } else {
          const media = suma / contador;
          console.log(`Máximo: ${maximo}`);
          console.log(`Mínimo: ${minimo}`);
          console.log(`Media: ${media}`);
        }
      }
    });
  };

  leerNumero();
}
maxMinAverageUntilZero();


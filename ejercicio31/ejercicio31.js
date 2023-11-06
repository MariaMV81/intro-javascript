/**
 *  Ejercicio 31
 *  Algoritmo que lea un numero entero (altura) y a partir de el,cree
 *  una escalera invertida de asteriscos con esa altura.
 *  Debera quedar asi, si ponemos una altura de 5
 *  *****
 *   ****
 *    ***
 *     **
 *      *
 *
 *  Deberas recordar la concatenacion y el uso de espacio en blanco (\n)
 */

function crearTriangulo(altura) {
  let escalera = "";
  for (let i = altura; i >= 1; i--) {
    // Agrega espacios en blanco antes de los asteriscos
    escalera += " ".repeat(altura - i) + "*".repeat(i) + "\n";
  }
  return escalera;
}

module.exports = { crearTriangulo };

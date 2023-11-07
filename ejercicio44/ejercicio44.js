/**
 * Ejercicio 44
 * El usuario tiene el siguiente menu:
 *
 *  Seleccione el numero de una de las siguientes opciones:
 *  1: Sumar
 *  2: Restar
 *  3: Multiplicar
 *  4: Dividir
 *  5: Salir del programa.
 *
 * Debera generar un algoritmo que reciba por parametros 3 numeros. El primer numero,
 * sera la opcion elegida del menu, y los siguientes dos numeros se usaran en la operacion
 * correspondiente a la seleccionada del menu.
 *
 * EJEMPLO: Si introduce 1,2,4. El usuario recibira 6.
 */

function seleccionarNumeroMenu(opcion, numero1, numero2) {
  switch (opcion) {
    case 1: // Sumar
      return numero1 + numero2;
    case 2: // Restar
      return numero1 - numero2;
    case 3: // Multiplicar
      return numero1 * numero2;
    case 4: // Dividir
      if (numero2 !== 0) {
        return numero1 / numero2;
      } else {
        return "No se puede dividir por cero";
      }
    case 5: // Salir
      return "Has salido correctamente del programa";
    default:
      return "No has introducido un numero correcto. El numero debe estar entre 1 y 5";
  }
}

module.exports = { seleccionarNumeroMenu };

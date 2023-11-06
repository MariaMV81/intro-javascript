/**
 *  Ejercicio 29
 *  Desarrollar un algoritmo que calcule el factorial de un numero introducido por
 *  los parametros de la funcion.
 *
 *  El factorial de un numero N es la multiplicacion de todos los numeros desde 1 hasta N.
 *  Es decir, para N = 5, el factorial seria 5! = 5*4*3*2*1 = 120;
 */

function factorialNumero(N) {
   if (N < 0) {
    return "No se puede calcular el factorial de un número negativo";
  } else if (N === 0 || N === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= N; i++) {
      factorial *= i;
    }
    return factorial;
  }
}


module.exports = { factorialNumero };

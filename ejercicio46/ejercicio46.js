//Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir estos números de forma descendente
/**
 * Ejercicio 46
 * Algoritmo que reciba tres numeros y los retorne en orden descendente. Los debera retornar en un objeto:
 * {1: X, 2: Y, 3: Z}
 */

function imprimirDescendente(A, B, C) {
  let mayor, medio, menor;

  if (A > B) {
    if (A > C) {
      mayor = A;
      if (B > C) {
        medio = B;
        menor = C;
      } else {
        medio = C;
        menor = B;
      }
    } else {
      mayor = C;
      medio = A;
      menor = B;
    }
  } else {
    if (B > C) {
      mayor = B;
      if (A > C) {
        medio = A;
        menor = C;
      } else {
        medio = C;
        menor = A;
      }
    } else {
      mayor = C;
      medio = B;
      menor = A;
    }
  }

  const resultado = {
    1: mayor,
    2: medio,
    3: menor,
  };

  return resultado;
}

module.exports = { imprimirDescendente };

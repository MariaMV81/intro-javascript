//Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos de 2 hasta N

/**
 * Ejercicio 53
 * Diseñar un algoritmo que lea un numero N y retorne cuantos numeros primos hay desde 2
 * hasta N
 */

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimeNumbers(N) {
  let count = 0;
  for (let i = 2; i <= N; i++) {
    if (isPrimeNumber(i)) {
      count++;
    }
  }
  return`Por debajo de ${N} hay ${count} numeros primos`;
}

module.exports = { getPrimeNumbers };

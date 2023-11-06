/**
 *  Ejercicio 26
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calule el cubo de cada uno de ellos. Recuerda la estructura For;
 */

function cuboNumerosArray(numeros) {
  let resultado = "";

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    const cubo = numero ** 3; // Calcula el cubo del número
    resultado += `El cubo de ${numero} es ${cubo}\n`;
  }

  return resultado; 
}

module.exports = { cuboNumerosArray };

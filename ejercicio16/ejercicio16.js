/**
 *  Ejercicio 16
 *  Desarrollar un algoritmo que nos calcule el cuadrado de los 9
 *  primeros numeros naturales. La funcion debera retornar un array
 *  con el resultado de estos nueve numeros ([1,4,9...])
 */

function cuadraroNumerosNaturales() {
  const result = [];
  for (let i = 0; i <= 9; i++){
    result.push(i**2); //esto agrega el valor calculado en el paso anterior al final del array

  }
  return result;
}

module.exports = { cuadraroNumerosNaturales };


//en este caso "result" es un array que se usa para almacenar.
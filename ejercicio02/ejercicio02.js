/**
 *  Ejercicio 2
 * Escriba un algoritmo que lea dos numeros que retorne el valor
 * de la operacion correcta segun el nombre de la funcion
 */

function sum(a,b) {
 return a+b;
}
sum(3,4);

function substract(a,b) {
 return a-b;
}
substract(4,3)

function multiply(a,b) {
 return a*b;
}
multiply(3,4)

function divide(a,b) {
 return a/b;
}
divide(8,2)

function total(sum, substract, multiply, divide) {
return sum + substract + multiply + divide;
}
total(8,2)

module.exports = { sum, substract, multiply, divide, total };

/**
 *  Ejercicio 27
 *  Desarrollar un algoritmo que imprima la tabla de multiplicacion
 *  del numero N introducido por parametros. Para N = 13, el output seria:
 *  13,26....130;
 */

function tablaNumero(N) {
 let tabla = "";
  for (let i = 1; i <= 10; i++) {
    tabla += N * i;
    // if (i < 10) {
    //   tabla += ", ";
    // } else {
    //   tabla += ";\n";
    } 
    return tabla;
  }
 




module.exports = { tablaNumero };

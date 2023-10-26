/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

function nuevoSalario() {
  let readline = require("readline-sync"); 

  let salario = Number(readline.question("Introduzca su salario: "));
  let categoria = Number(readline.question("Introduzca su categoría (1, 2, 3, o 4): "));
  
  if (categoria === 1) {
    salario = salario * 1.15;
  } else if (categoria === 2) {
    salario = salario * 1.1;
  } else if (categoria === 3) {
    salario = salario * 1.06;
  } else if (categoria === 4) {
    salario = salario * 1.03;
  } else {
    console.log("Su salario no tiene bonificación");
  }

  console.log(`Su nuevo salario es: ${salario}`);
}

  


module.exports = { nuevoSalario };

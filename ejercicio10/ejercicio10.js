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

function nuevoSalario(salario, categoria) {
  
  
  if (categoria === 1) {
    salario = salario * 1.15;
  } else if (categoria === 2) {
    salario = salario * 1.1;
  } else if (categoria === 3) {
    salario = salario * 1.06;
  } else if (categoria === 4) {
    salario = salario * 1.03;
  } else {
    return salario;
  }

  return salario;
}

  


module.exports = { nuevoSalario };

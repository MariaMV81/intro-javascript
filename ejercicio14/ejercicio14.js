// Ejercicio 14
// Construir un algoritmo que resuelva el problema
// que tienen unos surtidores de gasolina, que registran
// lo que surten en galones, pero el precio de la gasolina
// se fija en litros. El algoritmo debe calcular
// e imprimir el precio que hay que cobrarle al cliente.

// Precio gasolina = 1.333euros / litro
// 1 galon = 3,78541 litros

/**
 *  Ejercicio 14
 *  Construir un algoritmo que resuelva el problema que tienen unos surtidores
 *  de gasolina, que registran lo que surten en galones, pero el precio de la
 *  gasolina se fija en litros. El algoritmo debe calcular e retornar el precio
 *  que hay q cobrarle al cliente.
 *
 *  Precio gasolina = 1.333 euros / litro
 *  1 galon = 3,78541 litros
 */

function precioEnLitros(galonesSurtidos) {
  // Precio de la gasolina por litro en euros
  const precioPorLitro = 1.333;

  // Cantidad de litros en un galón
  const litrosPorGalon = 3.78541;

  // Convertir los galones a litros
  const litrosSurtidos = galonesSurtidos * litrosPorGalon;

  // Calcular el costo total
  const costoTotal = litrosSurtidos * precioPorLitro;

  return `El costo total es de ${costoTotal} euros.`;
}

const galonesSurtidos = 10;
const resultado = precioEnLitros(galonesSurtidos);
console.log(resultado);

module.exports = { precioEnLitros };

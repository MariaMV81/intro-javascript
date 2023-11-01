/** Ejercicio 13
 * Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro y la superficie del mismo.
        Superficie= base*altura
        Perímetro = 2*(base + altura)
    La funcion debera retornar un string que diga La superficie es de 'x' o El perimetro es de 'x'
 */

function calcularSuperficie(base, altura) {
  const superficie = base * altura;
  return `La superficie es de ${superficie}`
  
}

function calcularPerimetro(base, altura) {
  const perimetro = (base + altura);
  return `El perimetro es de ${perimetro}`;
}



module.exports = { calcularPerimetro, calcularSuperficie };

//Consultar porque no funciona con el 2 * (base + altura)
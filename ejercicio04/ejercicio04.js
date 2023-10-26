/**
 *  Ejercicio 4
 *  Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 *  es negativo, retorne el producto de los 3, si no lo es, retornara
 *  la suma. Si no se introducen tres numeros validos, retornara un string
 *  que diga Has introducido uno o varios caracteres no validos
 */

function sumOrMultiply() {
    let a;
    let b;
    let c;

    producto = a * b * c;
    sum = a + b + c;

 if (a < 0) {
    console.log(`El primer número es negativo, en este caso se procederá a realizar el producto de los tres ${producto}`)
 } else if ( a > 0){
    console.log(`Todos los números son positivos, este es el resultado de la suma: ${sum}`)
 } else {
    console.log("Ha introducido uno o varios caracteres no válidos")
 }
}

module.exports = { sumOrMultiply };

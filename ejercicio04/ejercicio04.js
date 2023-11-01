/**
 *  Ejercicio 4
 *  Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 *  es negativo, retorne el producto de los 3, si no lo es, retornara
 *  la suma. Si no se introducen tres numeros validos, retornara un string
 *  que diga Has introducido uno o varios caracteres no validos
 */

const { number } = require("yargs");

function sumOrMultiply(a, b, c) {

    
   if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
     return "Has introducido uno o varios caracteres no validos"; //Cuidado con los acentos, sino estan en el archivo del test da error el ejercicio
   }

   if (a < 0){
      return a * b * c;
   }else {
      return a + b + c;
   }

  
}


module.exports = { sumOrMultiply };

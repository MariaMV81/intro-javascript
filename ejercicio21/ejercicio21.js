/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */





function maxMinAverageUntilZero(numeros) {
    //inicializamos las variables
  let suma = 0;
  let cantidad = 0;
  let maximo = Number.MIN_SAFE_INTEGER; //es el valor máximo o mínimo que se puede representar con seguridad en JavaScript sin perder precisión en la representación numérica.
                                        //Esta constante se utiliza comúnmente al inicializar variables que se espera que almacenen el valor mínimo posible en el contexto de 
                                        //números enteros en JavaScript.
  let minimo = Number.MAX_SAFE_INTEGER;

   //Bucle for para recorrer cada uno de los elementos del array numeris
   //se extrae cada numero de array en la cinstante numero
    // si numero es 0 se sale del bucle
  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero === 0) {
      break;
    }

    //se acumula numero en la variable suma
    //se incrementa
    //se actualiza max y min utilizando el math.max y math.min
    suma += numero;
    cantidad++;
    maximo = Math.max(maximo, numero);
    minimo = Math.min(minimo, numero);
  }

  //si cantidad es igual a 0, imprime mensaje y retorna null
  if (cantidad === 0) {
    console.log("No se ingresaron números.");
    return null;
  }

  //se calcula la media dividiendo suma por cantidad
  const average = suma / cantidad;

  return { average, max: maximo, min: minimo };//Devuelve un objeto
}

module.exports = { maxMinAverageUntilZero };


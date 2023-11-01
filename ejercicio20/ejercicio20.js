/**
 *  Ejercicio 20
 *  Teniendo en cuenta que la clave es 'eureka, escribir un algoritmo
 *  que nos pida un array de claves por parametros y una contrasena.
 *
 *  Solo tendremos 3 intentos
 *  para aceptar, si fallamos, nos mostrara un mensaje por consola indicandonos que hemos agotado esos
 *  3 intentos. Si acertamos la clave, nos mostrara un mensaje por consola y saldra del programa. Si agotaramos
 *  los 3 intentos sin acertar, tambien nos mostrara un mensaje por consola y saldra
 *  del programa.
 */

function adivinarContrasena() {
  let readline = require("readline-sync"); 
  const clave = "Eureka";

  let contraseña;
  let intentos = 0;

  do {
    // entra en el bucle
    contraseña = require("Introdude tu contraseña: "); //solicita por pantalla que escriba por teclado "introc..." y lo que se escriba lo guarda en la var contraseña
    if (contraseña === clave) {
      //si lo que he escrito por pantalla es igual a Eureca ,
      intentos = 4; // le doy a intentos el valor 4 para que salga del bucle
    }
    intentos++; //este es el contador del bucle, que se va incrementando en 1 segun el numero de vece que se entre en el bucle
  } while (intentos < 4); // aqui compruebo si tengo que salir o no del bucle
  /* cuando sale del bucle, intentos vale 3 si no se ha acertado la clave o 5 si se ha acertado la clave */
  if (intentos === 4) {
    console.log("Has agotado tus intentos");
  } else {
    console.log("Has acertado!!!");
  }
}

module.exports = { adivinarContrasena };

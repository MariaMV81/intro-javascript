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

function adivinarContrasena(claves, contrasenaCorrecta) {
  //const contrasenaCorrecta = "eureka";
  let intentos = 3;

  for (let i = 0; i < intentos; i++) {
    const contrasena = claves[i];
    if (contrasena === contrasenaCorrecta) {
      console.log("Contraseña correcta, bienvenido");
      return;
    } else {
      return "Contraseña incorrecta, intento " + (i + 1) + " de " + intentos + ". Inténtalo de nuevo.";
    }
  }

  return "Has agotado tus intentos";
}

module.exports = { adivinarContrasena };


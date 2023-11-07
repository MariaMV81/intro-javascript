/**
 * Ejercicio 43
 *  Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare.
 *  Tendrá la estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39​
 */
function relojInfinito() {
  setInterval(function () {
    const ahora = new Date();
    const horaActual = ahora.toLocaleTimeString();

    console.log(horaActual);
  }, 1000); // Actualizar cada segundo
}


module.exports = { relojInfinito };

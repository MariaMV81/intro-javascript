/**
 *  Ejercicio 23
 *  Leer tres números que denoten una fecha (día, mes, año) por
 *  parametros.
 *  Comprobar que es una fecha válida. Si no es válida escribir
 *  un mensaje de error que indique que se ha introducido mal
 *  alguna parte de la fecha y volver a pedir los números. Si es válida,
 *  escribir la fecha cambiando el número del mes por su nombre.
 *  Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero del 2006”.
 *  El año debe ser mayor que 0. (Recuerda la estructura switch).
 */

function fechaIntroducida(dia, mes, anio) {
   const meses = [
     "enero",
     "febrero",
     "marzo",
     "abril",
     "mayo",
     "junio",
     "julio",
     "agosto",
     "septiembre",
     "octubre",
     "noviembre",
     "diciembre",
   ];

  // Comprobar si es una fecha válida
  if (dia <= 0 || mes <= 0 || mes > 12 || anio <= 0) {
    console.log("Has introducido mal alguna parte de la fecha.");
  } else {
    let nombreMes;
    switch (mes) {
      case 1:
        nombreMes = meses[0];
        break;
      case 2:
        nombreMes = meses[1];
        break;
      case 3:
        nombreMes = meses[2];
        break;
      case 4:
        nombreMes = meses[3];
        break;
      case 5:
        nombreMes = meses[4];
        break;
      case 6:
        nombreMes = meses[5];
        break;
      case 7:
        nombreMes = meses[6];
        break;
      case 8:
        nombreMes = meses[7];
        break;
      case 9:
        nombreMes = meses[8];
        break;
      case 10:
        nombreMes = meses[9];
        break;
      case 11:
        nombreMes = meses[10];
        break;
      case 12:
        nombreMes = meses[11];
        break;
      default:
        return "Has introducido mal el mes.";
       
    }

    return `${dia} de ${nombreMes} del ${anio}`;
  }
}

module.exports = { fechaIntroducida };

/**
 *  Ejercicio 24
 *  Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno
 *  se calcula según el siguiente criterio: la parte práctica vale el 10%; la parte
 *  de problemas vale el 50% y la parte teórica el 40%. El algoritmo leerá el nombre
 *  del alumno, las tres notas Y escribirá el resultado. Las notas deben
 *  estar entre 0 y 10, si no lo están, no imprimirá las notas, mostrará un mensaje
 *  de error y volverá a pedir otro alumno.
 *
 *  Los mensajes de error debe ser los siguientes; 'Ha habido un error con tus notas. Deben
 *  estar entre 1 y 10'. 'Error al recibir el nombre' (En caso de que se introduzca una cadena vacia).
 *
 *  Si todo es correcto el algorimo debera imprimir 'NombreAlumno tu nota final es de NotaFinal sobre 10'
 */

function notaAlumno(nombreAlumno, notaPractica, notaProblemas, notaTeorica ) {
    if (!nombreAlumno) {
    return "Error al recibir el nombre";
  }

  if (notaPractica < 0 || notaPractica > 10 || notaProblemas < 0 || notaProblemas > 10 || notaTeorica < 0 || notaTeorica > 10) {
    return "Ha habido un error con tus notas. Deben estar entre 1 y 10";
  }

  const notaFinal = (notaPractica * 0.10) + (notaProblemas * 0.50) + (notaTeorica * 0.40);
  return `${nombreAlumno} tu nota final es de ${notaFinal} sobre 10`;
}



module.exports = { notaAlumno };

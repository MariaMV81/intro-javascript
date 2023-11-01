/**
 *  Ejercicio 7
 *  Construir un algoritmo que reciba la cantidad de dinero entregado
 *  y el coste del producto. Debera calcular el cambio que se entregara
 *  al cliente. Debes tener en cuenta que el cliente podria entregar
 *  una cantidad de dinero insuficiente.
 */

function cambioCliente(entrega, precioProducto) {

    
    const cambio = entrega - precioProducto;

    if (cambio === 0){
        return "Gracias por su compra";
    } else if ( cambio < 0) {
        return "pago insuficiente";
    }else {
        return cambio;
    }
 
}

module.exports = { cambioCliente };

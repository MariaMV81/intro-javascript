/**
 *  Ejercicio 7
 *  Construir un algoritmo que reciba la cantidad de dinero entregado
 *  y el coste del producto. Debera calcular el cambio que se entregara
 *  al cliente. Debes tener en cuenta que el cliente podria entregar
 *  una cantidad de dinero insuficiente.
 */

function cambioCliente() {

    let precioProducto = 250;
    let entrega;
    
    cambio = entrega - precioProducto;

    if (entrega === precioProducto){
        console.log("Gracias por su compra")
    } else if ( entrega > precioProducto) {
        console.log(`Lo siento le faltan ${precioProducto - entrega} €`)
    }else {
        console.log(`Aquí tiene su cambio ${cambio}, gracias por su compra.`)
    }
 
}

module.exports = { cambioCliente };

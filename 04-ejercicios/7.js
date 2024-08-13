/**
 * Crear un algoritmo que devuelva el numero mayor y menor de un array
 * @param {Array} arr
 * @param {number} idx
 */

function precioCompleto(precio, impuesto) {
    let impuesto_aplicado = precio * impuesto
    let precio_completo = precio + impuesto_aplicado
    return precio_completo
}

let resultado = precioCompleto(19.90, 0.15)
console.log(resultado)
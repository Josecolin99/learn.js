/**
 * Crear un algoritmo que devuelva el numero mayor y menor de un array
 * @param {Array} arr
 * @param {number} idx
 */

let longitud = 5
function crearArray(n) {
    if (n <= 0) return []
    let array = []
    let count = 1
    while (count <= n) {
        array.push(count)
        count = count + 1
    }
    return array
}

let resultado = crearArray(longitud)
console.log(resultado)
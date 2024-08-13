/**
 * Crear un algoritmo que devuelva el numero mayor y menor de un array
 * @param {Array} arr
 * @param {number} idx
 */

let pairs = [
    [ 1, {name: 'Nicolas' } ],
    [ 2, {name: 'Maduro' } ],
    [ 3, {name: 'Chanchito' } ]
  ]
function toCollection(arr) {
    let colection = []
    for (object of arr) {
        object_single = object[1]
        object_single.id = object[0]
        colection.push(object_single)
    }
    return colection
}

let resultado = toCollection(pairs)
console.log(resultado)
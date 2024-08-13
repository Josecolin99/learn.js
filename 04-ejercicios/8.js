/**
 * Crear un algoritmo que devuelva el numero mayor y menor de un array
 * @param {Array} arr
 * @param {number} idx
 */

let array = [
    {
        id: 1,
        name: 'Nicolas'
    },
    {
        id: 2,
        name: 'Maduro'
    },
    {
        id: 3,
        name: 'Chanchito'
    }
]
function toPairs(arr) {
    let pairs = []
    for (object of arr) {
        temp_pairs = [object.id, object]
        pairs.push(temp_pairs)
    }
    return pairs
}

let resultado = toPairs(array)
console.log(resultado)
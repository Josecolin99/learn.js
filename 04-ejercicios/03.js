/**
 * Indice validar que no sea menor a cero y que el elemnto exista en el array
 * @param {Array} arr
 * @param {number} idx
 */

// ? Me equivoque ya que esto vlaida si algo esta en el array
// function getByIdx(arr, idx) {
//     if (arr.includes(idx)) return 'Esta'
//     else return 'No esta'
// }

function getByIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe'
    }
    return arr[idx]
}

let resltado = getByIdx([1, 2], 1)
console.log(resltado)
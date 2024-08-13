/**
 * Crear un algoritmo que devuelva el numero mayor y menor de un array
 * @param {Array} arr
 * @param {number} idx
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let numerosPositivos = []
    for (number of arr) {
        if (number > 0) numerosPositivos.push(number)
    }
    return numerosPositivos.length
}

let numeros = cuantosPositivos(array)
console.log(numeros)
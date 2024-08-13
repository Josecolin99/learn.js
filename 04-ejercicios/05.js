/**
 * Crear un algoritmo que devuelva el numero mayor y menor de un array
 * @param {Array} arr
 * @param {number} idx
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0]
    let mayor = arr[0]
    arr
    for (numero of arr) {
        menor = menor < numero ? menor :  numero
        mayor = mayor > numero ? mayor :  numero
    }
    return [menor, mayor]
}

let numeros = getMenorMayor(array)
console.log(numeros)
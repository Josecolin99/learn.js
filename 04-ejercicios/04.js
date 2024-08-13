/**
 * Crea un algoritmo que imprima numeros impares
 * @param {Array} arr
 * @param {number} idx
 */

function numerosImpares(max_iter) {
    
    lista_impar = []
    for (let iter = 1;iter < max_iter;iter++) {
        if(iter % 2 != 0) lista_impar.push(iter)
    }
    return lista_impar
}
impar = numerosImpares(30)
console.log(impar)
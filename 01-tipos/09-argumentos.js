function suma(a, b) {
    return a + b 
}
let resultado = suma(1, 2)
console.log(resultado)


function suma(a, b) {
    console.log(arguments)
    return a + b 
}
resultado = suma(1, 2, 4, 5)
console.log(resultado)


function suma(a, b, c, d) {
    return a + b + c + d
}
resultado = suma(1, 2, 4, 5)
console.log(resultado)


// function suma(a, b) {
//     return a + b
// }
// resultado = suma(1)
// console.log(resultado)
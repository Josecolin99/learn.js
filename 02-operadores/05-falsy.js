// Short-Circuit
// Corto circuito


// Falso
// falso
// 0
// ''
// null
// undefined
// NaN


let nombre = 'ss'
// Coloca el primero si el primero es algo si no el segundo
let username = nombre || 'Anonimo'
console.log(username)

// coloca el segundo si el primero es algo si no el primero
let username_ = nombre && 'Anonimo'
console.log(username_)

function fn1(){
    console.log('Soy funcion 1')
    return false
}

function fn2(){
    console.log('Soy funcion 2')
    return true
}
let x
x = fn1() && fn2()
console.log(x)
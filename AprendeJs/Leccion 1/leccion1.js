
//node .\leccion1.js


// Type 
/*
number
string
boolean
null
undefined
symbol
bigint
 */

let number = 1
let string = 'This is a string'
let bool = true // false
let null_var = null //<- This es empty
let undefined_var = undefined //<- This not exist}

// Operadores de comparacion
//* Numeros
5 > 3 // true
5 < 3 // false
5 >= 3 // true
5 >= 5 // true
5 <= 3 // false
5 <= 5 // true
5 === 5 // true <- Esto verfica que sean del mimo tipo y mismo valor
5 !== 5 // false
//* Strings
'JavaScript' === 'JavaScript' // true
'JavaScript' === 'Java' // false
"JavaScript" !== 'PHP' // true

// VAR, LET, CONST
/*
var: Alcance de función, sujeto a elevación (hoisting), y reasignable.
let: Alcance de bloque, no se eleva, y reasignable.
const: Alcance de bloque, no se eleva, y no reasignable (inmutable en cuanto a la asignación).
*/

// Comentarios
//? Una sola linea
/* 
Multilinea
pa
pu
*/

// console.log
console.log('lol');
console.log(number, string, bool);
console.error('Error')
// ❌ Error
console.warn('Advertencia')
// ⚠️ Advertencia
console.info('Información')
// ℹ️ Información


const EDAD = 16

if (EDAD >= 18){
    console.log('Es mayor de edad')
} else if (EDAD >= 16){
    console.log('Es CASI mayor de edad')
} else {
    console.log('Es Menor de edad')
}

const edad = 17
const tieneCarnet = true

// si es mayor de edad y tiene carnet entonces...
if (edad >= 18 && tieneCarnet) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}

const edad_ = 17
const tieneCarnet_ = true
const puedeConducir = edad_ >= 18 && tieneCarnet_

if (puedeConducir) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}
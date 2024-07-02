// Sumar todos los números en un arreglo:
// Escribe una función que reciba un arreglo de números y devuelva la suma de todos los números en el arreglo.

let numbers = [1,2,3,4,5,6,7,8,9]
let result = 0

for (number of numbers) {
    result += number
}
console.log(result)

// Encontrar el número más grande en un arreglo:
// Escribe una función que reciba un arreglo de números y devuelva el número más grande del arreglo.

let max_number = numbers[0]

for (number of numbers) {
    if (number > max_number) {
        max_number = number
    }
}
console.log(Math.max(...numbers))
console.log(max_number)

// Invertir una cadena:
// Escribe una función que reciba una cadena de texto y devuelva la cadena invertida.

let string = 'anita lava la tina'
let reverse_string = ''
let start_index = string.length - 1


for (start_index;start_index >= 0; start_index--) {
    console.log(string[start_index])
    reverse_string += string[start_index]
}
console.log(string.split('').reverse().join(''))
console.log(reverse_string)

// Contar las vocales en una cadena:
// Escribe una función que reciba una cadena de texto y devuelva el número de vocales que contiene.
let count_vocals = 0
let vocals = ['a', 'e', 'i', 'o', 'u']
for (cara of string) {
    let coincidence = vocals.includes(cara)
    if (coincidence) {
        count_vocals++
    }
}
console.log(count_vocals)

// Encontrar el factorial de un número:
// Escribe una función que reciba un número y devuelva su factorial
function palindrome(word) {
    let reverse_word = word.split('').reverse().join('')
    reverse_word = reverse_word.split(' ').join('')
    let formated_word = word.split(' ').join('')
    if (formated_word == reverse_word) return true
    return false
}
console.log(palindrome('anita lava la tina'))

// Verificar si una cadena es un palíndromo:
// Escribe una función que reciba una cadena de texto y verifique si es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).
function factorial(number) {
    let result = 1
    for (number; number>= 0; number--){
        let less_number = number - 1
        if (less_number == 0) return result
        result = number * result
    }
}

console.log(factorial(5))

// Remover duplicados de un arreglo:
// Escribe una función que reciba un arreglo de números y devuelva un nuevo arreglo sin elementos duplicados.

let duplicated_numbers = [1,1,2,2,3,3,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
let clean_numbers = []

for (number of duplicated_numbers) {
    console.log(number)
    if (!clean_numbers.includes(number)) {
        clean_numbers.push(number)
    }
}
console.log(clean_numbers)

clean_numbers = []
for (number of duplicated_numbers) {
    console.log(number)
    if (clean_numbers.includes(number)) continue
    clean_numbers.push(number)
    
}
console.log(clean_numbers)
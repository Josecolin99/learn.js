
//* Ejercicio 1: Contar hasta 10
//? Escribe un programa que cuente del 1 al 10 e imprima cada número. Usa continue para omitir el 
//?  número 5 y break para detener el bucle si el número es mayor a 8.

number = 0
while (true) {
    number += 1
    if (number === 5) continue
    if (number > 8) break
    console.log(number)
}
console.log('---------')

//* Ejercicio 2: Suma de números pares
//? Crea un programa que sume todos los números pares del 1 al 20 usando un bucle while. 
//? Usa una estructura if para verificar si el número es par y sumarlo.
number = 0
sum = 0
while (number <= 20) {
    number++
    if (number % 2 === 1) continue
    console.log('Sumando un par!: ' + number)
    sum += number
}
console.log(sum)
console.log('---------')

//* Ejercicio 3: Factorial de un número
//? Escribe un programa que calcule el factorial de un número dado por el usuario usando un bucle 
//? while. Asegúrate de que el programa maneje el caso donde el número es 0 o negativo.
number = 5
factorialNumber = 1
while (true) {
    if (number == 0) break
    console.log(number)
    factorialNumber *= number
    number--
}
console.log(factorialNumber)
console.log('---------')


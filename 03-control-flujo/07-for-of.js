// para el uso de arrays
let animales = ['Chanchito triste', 'Dragón', 'Perrito']

for (let animal of animales) {
    console.log('-', animal)
}

console.error('----')

let i = 0
while (i<animales.length) {
    console.log(animales[i])
    i++
}
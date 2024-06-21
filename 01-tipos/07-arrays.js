let animals = ['chanchito', 'horse']

console.log(animals)
console.log(animals[0])
console.log(animals[1])

animals[2] = 'dragon'

console.log(animals)

animals[10] = 'Pez' // Si se agrega un indice muy grande se llenara con undefined
console.log(animals[7])
console.log(typeof animals)
console.log(animals.length)

// Con esto se agrega como si fuera un append
animals.push('Loca')
console.log(animals)
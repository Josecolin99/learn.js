// Personajes de Tv
let nombre = 'Tanjiro'
let anime = 'Demon Slayer'
let edad = 16

// Objeto

let personaje = {
    nombre: 'Tanjiro',
    anime: 'Demon Slayer',
    edad: 16,
}

console.log(personaje)
console.log(personaje.nombre) // <- Form 1 to acces
console.log(personaje.anime)
console.log(personaje['edad']) // <- Form 2 to acces

// Modify
personaje.edad = 13

let llave = 'edad'
personaje[llave] = 16

// Who delte a property
delete personaje.anime

console.log(personaje)
// uso de objetos
let user = {
    name: 'Lol',
    edad: '34',
    random: 'Random'
}

for (let prop in user) {
    console.log(prop, user[prop])
}
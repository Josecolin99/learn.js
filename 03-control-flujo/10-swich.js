let action = 'guardar'

switch (action) {
    case 'listar':
        console.log('Accion de listar')
        break //* <- Importante el break por que si no toda la logica se ejecuta
    case 'guardar':
        console.log('Accion de guardar')
        break
    default:
        console.log('Accion no reconocida')
}
/** 
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
**/
function nombreResolucion(ancho, alto){
    resolution_match = ancho + ' x ' + alto
    switch (resolution_match){
        case '7680 x 4320':
            resolution = '8K'
            break
        case '3840 x 2160':
            resolution = '4K'
            break
        case '2560 x 1440':
            resolution = 'WQHD'
            break
        case '1920 x 1080':
            resolution = 'FHD'
            break
        case '1280 x 720':
            resolution = 'HD'
            break
        default:
            resolution = 'Sin definir'
            break
    }
    return resolution
}

let nombre = nombreResolucion(1920, 1080)
console.log(nombre)
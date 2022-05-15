const sharp = require("sharp")

const combine = `D:/Projects/image-on-image-auto/combined.png`
const combineMiddle = `D:/Projects/image-on-image-auto/combineMiddle.jpg`

let flow = "D:/Projects/image-on-image-auto/a.png"
let logo = `D:/Projects/image-on-image-auto/logo.jpg`
let copiar = 'D:/Projects/image-on-image-auto/copia.png'

// todo: buscar flow, logo y noCopiar en la misma carpeta de exe
// todo: agrandar logo
// todo: get widht and heigh from original flow

const width = 4750
const height = 2150

try {

    sharp(flow).resize(width,height).toFile(`D:/Projects/image-on-image-auto/flowRes.jpg`)

    //sharp(copiar).resize(width,height).toFile(`D:/Projects/image-on-image-auto/copiarRes.jpg`)

    setTimeout(cb, 2000)
    setTimeout(cb2, 4000)
    setTimeout(cb3, 6000)
    
    
    

    

    //sharp(combineMiddle).composite([{ input: copiar }]).toFile(combine)

    //sharp(a)
  //.rotate(180)
  //.flatten( { background: '#ff6600' } )
  //.composite([{ input: copiar, gravity: 'southwest' }])
  //.sharpen()
  //.withMetadata()
  //.webp( { quality: 90 } )
  //.toFile(combine);

    

} catch (e) {
    console.log(e)
}
    //4750 ancho
    //2150 alto
    //32 bits profundidad
    //260KB 

function cb() {
    flow = `D:/Projects/image-on-image-auto/flowRes.jpg`
    copiar = `D:/Projects/image-on-image-auto/copia.png`
    sharp(flow).composite([{ input: logo, gravity: 'southwest' }])
    .toFile(combineMiddle)

}

function cb2() {
    sharp(combineMiddle).resize(width,height).toFile(flow)    
}

function cb3() {
    sharp(flow)
    .composite([{ input: copiar, blend: "over" }])
    .toFile(combine)

}

/*
clear, source, over, in, out, atop, dest, dest-over, dest-in, dest-out, dest-atop, 
xor, add, saturate, multiply, screen, overlay, darken, lighten, colour-dodge, 
color-dodge, colour-burn,color-burn, hard-light, soft-light, difference, exclusion
*/
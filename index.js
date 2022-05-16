const sharp = require("sharp");
const sizeOf = require('image-size');
const fs = require('fs');

let flow = `${__dirname}\\flow.png`;
let logo = `${__dirname}\\logo.jpg`;
let copiar = `${__dirname}\\noCopiar.png`;

const combine = `${__dirname}\\final.png`;
const combineMiddle = `${__dirname}\\combineMiddle.jpg`;
const noCopiarResized = `${__dirname}\\noCopiarResized.png`;

try {

    // Add logo
    sharp(flow)
    .composite([{ input: logo, gravity: 'south' }])
    .toFile(combineMiddle);

    // Resize no copiar
    setTimeout(() => {
        sizeOf(combineMiddle, function (err, dimensions) {
            if (err) throw new Error(err);
            console.log(`Width: ${dimensions.width}, Height: ${dimensions.height}`);   

            sharp(copiar)
            .resize(dimensions.width, dimensions.height)
            .toFile(noCopiarResized);
        });
    }, 500);

    // Add no copiar
    setTimeout(() => {
        sharp(combineMiddle)
        .composite([{ input: noCopiarResized, blend: "over" }])
        .toFile(combine);
    }, 1500);

    // Delete middle files
    setTimeout(() => {
        fs.unlinkSync(combineMiddle)
        fs.unlinkSync(noCopiarResized)
    }, 3000);


} catch (e) {
    console.log(e);
}

const fs = require('fs');
const colors = require('colors');

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejcet) => {

        if (!Number(base)) {
            rejcet('No es un número');
            return;
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err) rejcet(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}

listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.green);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}
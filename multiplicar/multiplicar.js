// Filesystem
const fs = require('fs')
const colors = require('colors')
    //const argv = require('./config/yargs')

let listaTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        console.log('**************************************'.yellow);
        console.log(`Tabla del ${base} hasta ${limite}`.yellow);

        console.log('**************************************'.yellow);
        for (let i = 0; i < limite; i++) {
            console.log(`${base} * ${i} = ${base*i} `);
        }
        resolve('Impresión finalizada')

    })
}


let crearArchivo = (base, limite) => {
        return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject(`Caracter ${base} no es un numero.`)
                return
            }
            if (!Number(limite)) {
                reject(`Caracter ${limite} no es un numero.`)
            }


            let data = ''



            for (let i = 1; i < limite; i++) {
                // console.log(` ${base} * ${i}  es  ${base*i} `)
                data += ` ${base} * ${i}  es  ${base*i} \n`
            }

            fs.writeFile(`tablas/tablas-${base}.txt`, data, (err) => {
                if (err) reject(err)
                else
                    resolve(`tabla-${base}.txt`)
            })
        })
    }
    // exportarlo para usarlo
module.exports = {
    crearArchivo,
    listaTabla
}

//console.log(module);
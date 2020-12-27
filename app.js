//const multiplicar = require('./multiplicar/multiplicar')
const { crearArchivo, listaTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const colors = require('colors/safe')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log('Listar')
        listaTabla(argv.base, argv.limite)
            .then(msg => console.log(msg))
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${archivo} creado exitosamente.`, colors.red(archivo)))
            .catch((err) => {
                console.log(err);
            });

        break;
    default:
        console.log('Comando no reconocido');

}

console.log('Comando ', comando);
//let argv2 = process.argv
//console.log('Primero : ', argv2);
console.log('Base ', argv.base);
console.log('Limite ', argv.limite);

//let argv2 = process.argv
//let parametro = argv2[2]
//let base = argv.base //parametro.split('=')[1]
//console.log(module);
//console.log(process.argv);

//console.log(argv);
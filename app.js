const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        console.log('crear');
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('listar');
        break;
    default:
        console.log('Comando no reconocido');
}
//requires 
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearTabla, listarTabla } = require('./tablas/multiplicar');

let comando = argv._[0];

console.log(comando);
switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
      .then( res => console.log(res))
      .catch(e => console.log(e));
  break;

  case 'crear':
    crearTabla(argv.base, argv.limite)
      .then( archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(e => console.log(e));
  break;

  default:
    console.log('comando no reconocido');
  break;
}

// console.log(process.argv);
// let parametro = argv[2];
// base = parametro.split('=')[1];

/* 

 */
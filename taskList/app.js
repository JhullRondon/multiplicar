const argv = require('./config/yargs').argv;
const todo = require('./todo/toDo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
  case 'crear':
  let tarea = todo.crear(argv.descripcion);
    console.log(`Creada la tarea: ${tarea.descripcion}`);
  break;

  case 'listar':
    let list = todo.listar();

    console.log('======lista de tareas======'.yellow);
    for (const tarea of list) {
      console.log('====TAREA===='.green);
      console.log(tarea.descripcion.green);
      console.log(`Estado:  ${tarea.completado ? 'Completada' : 'En progreso'}`.green);
      console.log('============='.green)
    }
  break;

  case 'update':
    const task = todo.update(argv.descripcion, argv.completado);
    console.log(task);
  break;

  case 'borrar': 
    const borrado = todo.borrar(argv.descripcion);
    console.log(`la tarea: "${borrado[0].descripcion}" fue borrada.`. red);
  break;

  default: 
    console.log('el comando no existe en esta app');
  break;
}
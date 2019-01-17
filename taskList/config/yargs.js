const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer'
};

const completado = {
  alias: 'c',
  default: true,
  desc: 'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
  .command('crear', 'Crea una tarea por hacer', {
    descripcion
  })
  .command('update', 'Actualiza una tarea al estado completado', {
    descripcion,
    completado
  })
  .command('borrar', 'Borra una tarea por hacer', {
    descripcion
  })
  .command('listar', 'Muestra los elementos en la pantalla')
  .help()
  .argv;
  
module.exports = {
  argv
};
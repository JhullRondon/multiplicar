const fs =  require('fs');

let toDoList = [];

const leerDB = () => {
  try {
    toDoList = require('../DB/data.json');    
  } catch (error) {
    toDoList = [];
  }
};

const guardarDB = () => {

  let data = JSON.stringify(toDoList);

  fs.writeFile('DB/data.json', data, err => {
    if (err) throw new Error('No se pudo escribir el archivo', err);
  })
}

const crear = (descripcion) => {
  leerDB();

  let todo = {
    descripcion,
    completado: false
  }
  toDoList.push(todo);

  guardarDB();
  return todo;
};

const listar = () => {
  leerDB();
  return toDoList;
};

const update = (descripcion, completado = true) => {
  leerDB();
  let taskIndex = toDoList.findIndex(tarea => tarea.descripcion == descripcion);
  if (taskIndex !== -1){
    toDoList[taskIndex].completado = completado;
    guardarDB();
    return toDoList[taskIndex];
  } else {
    return 'Tarea no encontrada';
  }
};

const borrar = (descripcion) => {
  leerDB();
  let taskIndex = toDoList.findIndex(tarea => tarea.descripcion == descripcion);
  if (taskIndex !== -1) {
    let task = toDoList.splice(taskIndex, 1);
    guardarDB();
    return task;
  } else {
    console.log('Tarea no encontrada');
  }
};

module.exports = {
  crear,
  listar,
  update,
  borrar
}
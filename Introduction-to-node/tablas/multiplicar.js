const fs = require('fs');
const colors = require('colors');

let crearTabla = (base, limite) => {
  return new Promise ((resolve, reject) => {

    if (!Number(base) || !Number(limite)){
      reject(`${base} o ${limite} no es un numero`);
      return;
    }

    let data = '';
    
    for (let i = 1; i <= limite; i++) {
      data += (`${base} * ${i} = ${base*i}\n`);
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) reject(err)
      else resolve(`tabla-${base}.txt`.green);
    });
  });
};

let listarTabla = (base, limite) => {
  return new Promise ((resolve, reject) => {
    if (!Number(base) || !Number(limite)){
      reject(`${base} o ${limite} no es un numero`);
      return;
    }

    let data = '';
    console.log(`
===================
===TABALA DEL ${base}===
===================`.yellow);
    for (let i = 1; i <= limite; i++) {
      data = (`${base} * ${i} = ${base*i}`);
      console.log(data.magenta);
    }
    resolve('Tabla Impresa');
  });
};
 module.exports = {
  crearTabla,
  listarTabla
}
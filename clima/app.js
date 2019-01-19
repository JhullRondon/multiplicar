
const argv = require('./config/yargs').argv;
const weather =require('./weather/weather');
const lugar = require('./lugar/lugar');

const getInfo = async () => {
  try {
    const place = await lugar.getLugarLatLng(argv.direccion);
    const temp = await weather.clima(place.lat, place.lng);

    console.log(`La temperatura en ${place.location}\nEs de: ${temp}º`);
  } catch (error) {
    console.log(`No se pudo comprobar el clima en: ${argv.direccion}`);
  }
};
getInfo();

/* lugar.getLugarLatLng(argv.direccion)
  .then(
    resp => {
      weather.clima(resp.lat, resp.lng)
        .then(
          temp => console.log(temp)
        )
        .catch(e => console.log(e));
    }
  )
  .catch(e => console.log(e))
 */
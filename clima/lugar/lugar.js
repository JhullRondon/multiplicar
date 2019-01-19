const axios = require('axios');
const { apiKey } = require('../config/apiKeys');

const getLugarLatLng = async (direccion) => {
  
  let encodeUrl = encodeURI(direccion);
  try {

    const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=${apiKey()}`);
    
    if (resp.data.status === 'OK') {
      const location = resp.data.results[0].formatted_address;
      const coors = resp.data.results[0].geometry.location;

      return { 
        location,
        lat: coors.lat,
        lng: coors.lng
      }
    } else {
      throw new Error(`El lugar: ${direccion}, no puedo ser encontrado.`);
    }

  } catch (error) {
    return error;
  }

};

module.exports = {
  getLugarLatLng
};

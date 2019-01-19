const { weatherKey } = require('../config/apiKeys');
const axios = require('axios');

const clima = async (lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${weatherKey()}`);

  return resp.data.main.temp;
};

module.exports = {
  clima
};
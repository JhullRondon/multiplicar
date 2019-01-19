const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirrecion de la ciudad o pais',
    demand: true
  }
})
.help()
.argv;

module.exports = {
  argv
}
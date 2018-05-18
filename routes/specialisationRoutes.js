const specialisations = require('../config/specialisation');

module.exports = app => {
  app.get('/api/specialisation', (req, res) => {
    try {
      let especialidades = specialisations.map( especialidad => {
        return especialidad;
      });
      especialidades = especialidades.sort(function(a, b) {
        if (a.description > b.description) {
          return 1;
        }
        if (a.description < b.description) {
          return -1;
        }
        return 0;
      });
      res.send(especialidades);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

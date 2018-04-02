const locations = require('../config/argentina');

module.exports = app => {
  app.get('/api/locations/:province', (req, res) => {
    try {
      res.send(
        locations.filter(loc => {
          return loc.provincia === req.params.province;
        })
      );
    } catch (err) {
      res.status(500).send(err);
    }
  });
  app.get('/api/province', (req, res) => {
    try {
      let provincias = locations.map(({ provincia, iso_31662 }) => {
        return { provincia, iso_31662 };
      });
      provincias = provincias.sort(function(a, b) {
        if (a.provincia > b.provincia) {
          return 1;
        }
        if (a.provincia < b.provincia) {
          return -1;
        }
        return 0;
      });
      res.send(provincias);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

const locations = require('../config/argentina');

module.exports = app => {
  app.get('/api/locations/:province', (req, res) => {
    try {
      res.send(
        locations.filter(loc => {
          return loc.iso_31662 === req.params.province;
        })
      );
    } catch (err) {
      res.status(500).send(err);
    }
  });
  app.get('/api/province', (req, res) => {
    try {
      res.send(
        locations.map(({ provincia, iso_31662 }) => {
          return { provincia, iso_31662 };
        })
      );
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

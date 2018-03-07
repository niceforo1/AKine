module.exports = (app, mongoose) => {
  const Event = mongoose.model('event');

  app.get('/api/events', async (req, res) => {
    try {
      const event = await Event.find().populate({
          path: 'patient',
          model: 'patient'
      });
      res.send(event);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/events/:id', async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      res.send(event);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/api/events', async (req, res) => {
    try {
      const {
        professional,
        patient,
        consultationTypeId,
        requestDay,
        date,
        status,
        overSchedule,
        spontaneous,
        observations
      } = req.body;

      const event = await new Event({
        professional,
        patient,
        consultationTypeId,
        requestDay,
        date,
        status,
        overSchedule,
        spontaneous,
        observations
      });

      await event.save();
      res.send(event);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete('/api/events/:id', async (req, res) => {
    try {
      const event = await Event.findByIdAndRemove(
        req.params.id
      );
      res.send(event);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.put('/api/events/:id', async (req, res) => {
    try {
      const event = await Event.update({ _id: req.params.id }, req.body);
      res.send(event);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

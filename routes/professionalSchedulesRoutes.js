module.exports = (app, mongoose) => {
  const ProfessionalSchedule = mongoose.model('professionalSchedule');

  app.get('/api/professionalSchedules', async (req, res) => {
    const professionalSchedule = await ProfessionalSchedule.find();
    try {
      res.send(professionalSchedule);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/professionalSchedules/:id', async (req, res) => {
    try {
      const professionalSchedule = await ProfessionalSchedule.findById(req.params.id);
      res.send(professionalSchedule);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  app.get('/api/professionalSchedules/:professional', async (req, res) => {
    try {
      const professionalSchedule = await ProfessionalSchedule.findOne({ professional: req.params.professional });
      res.send(professionalSchedule);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  app.post('/api/professionalSchedules', async (req, res) => {
    try {
      const {
        professional,
		speciality,
		hours,
        nonWorkingDay
      } = req.body;

      const professionalSchedule = await new ProfessionalSchedule({
        professional,
		speciality,
		hours,
        nonWorkingDay
      });

      await professionalSchedule.save();
      res.send(professionalSchedule);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete('/api/professionalSchedules/:id', async (req, res) => {
    try {
      const professionalSchedule = await ProfessionalSchedule.findByIdAndRemove(req.params.id);
      res.send(professionalSchedule);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.put('/api/professionalSchedules/:id', async (req, res) => {
    try {
      const pac = await ProfessionalSchedule.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      const professionalSchedule = await ProfessionalSchedule.find();
      res.send(professionalSchedule);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

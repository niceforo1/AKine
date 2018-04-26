module.exports = (app, mongoose) => {
  const Professional = mongoose.model('professional');

  app.get('/api/professionals', async (req, res) => {
    try {
      const professional = await Professional.find().sort('lastName');
      res.send(professional);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/professionals/:id', async (req, res) => {
    try {
      const professional = await Professional.findById(req.params.id);
      res.send(professional);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/professionalsDoc/:document', async (req, res) => {
    try {
      const professional = await Professional.findOne({
        id: req.params.document
      });
      res.send(professional);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/api/professionals', async (req, res) => {
    try {
      const {
        user,
        id,
        name,
        lastName,
        birthDate,
        gender,
        email,
        picture,
        license,
        specialities,
        address,
        phones,
        socialInsurance
      } = req.body;

      const professional = await new Professional({
        user,
        id,
        name,
        lastName,
        birthDate,
        gender,
        email,
        picture,
        license,
        specialities,
        address,
        phones,
        socialInsurance
      });

      await professional.save();
      res.send(professional);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete('/api/professionals/:id', async (req, res) => {
    try {
      const professional = await Professional.findByIdAndRemove(req.params.id);
      res.send(professional);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.put('/api/professionals/:id', async (req, res) => {
    try {
      const pac = await Professional.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      const professional = await Professional.find();
      res.send(professional);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

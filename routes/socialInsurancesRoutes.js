module.exports = (app, mongoose) => {
  const SocialInsurance = mongoose.model('socialInsurance');

  app.get('/api/socialInsurances', async (req, res) => {
    const socialInsurance = await SocialInsurance.find();
    try {
      res.send(socialInsurance);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/socialInsurances/:id', async (req, res) => {
    try {
      const socialInsurance = await SocialInsurance.findById(req.params.id);
      res.send(socialInsurance);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/api/socialInsurances', async (req, res) => {
    try {
      const { name, contact, email, address, phones } = req.body;

      const socialInsurance = await new SocialInsurance({
        name,
        contact,
        email,
        address,
        phones
      });

      await socialInsurance.save();
      res.send(socialInsurance);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete('/api/socialInsurances/:id', async (req, res) => {
    try {
      const socialInsurance = await SocialInsurance.findByIdAndRemove(
        req.params.id
      );
      res.send(socialInsurance);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

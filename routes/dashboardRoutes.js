module.exports = (app, mongoose) => {
  const Patient = mongoose.model('patient');
  const Professional = mongoose.model('professional');

  app.get('/api/dashboard-home', async (req, res) => {
    try {
      const patient = await Patient.count({});
      const professional = await Professional.count({});
      let result = { 'professionalCountTotal': professional, 'patientCountTotal': patient };
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  });


};

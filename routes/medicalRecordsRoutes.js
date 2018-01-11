module.exports = (app, mongoose) => {
  const MedicalRecord = mongoose.model('medicalRecord');

  app.get('/api/medicalRecords', async (req, res) => {
    const medicalRecord = await MedicalRecord.find();
    try {
      res.send(medicalRecord);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/medicalRecords/:id', async (req, res) => {
    try {
      const medicalRecord = await MedicalRecord.findById(req.params.id);
      res.send(medicalRecord);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/api/medicalRecords', async (req, res) => {
    try {
      const {
        professional,
        patient,
        date,
        medicalRecordType,
        weight,
        height,
        bloodPressure,
        physicalExam,
        complementaryStudies,
        observations,
        icd10,
        personalNotes
      } = req.body;

      const medicalRecord = await new MedicalRecord({
        professional,
        patient,
        date,
        medicalRecordType,
        weight,
        height,
        bloodPressure,
        physicalExam,
        complementaryStudies,
        observations,
        icd10,
        personalNotes
      });

      await medicalRecord.save();
      res.send(medicalRecord);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete('/api/medicalRecords/:id', async (req, res) => {
    try {
      const medicalRecord = await MedicalRecord.findByIdAndRemove(req.params.id);
      res.send(medicalRecord);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.put('/api/medicalRecords/:id', async (req, res) => {
    try {
      const pac = await MedicalRecord.update({ _id: req.params.id }, req.body);
      const medicalRecord = await Paciente.find();
      res.send(medicalRecord);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

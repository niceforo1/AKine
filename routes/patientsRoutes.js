module.exports = (app, mongoose) => {
  const Patient = mongoose.model('patient');

  app.get('/api/patients', async (req, res) => {
    const patient = await Patient.find();
    try {
      res.send(patient);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/patients/:id', async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id);
      res.send(patient);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.post('/api/patients', async (req, res) => {
    try {
      const {
        id,
        name,
        lastName,
        birthDate,
        gender,
        email,
        job,
        picture,
        address,
        phones,
        currentMedication,
        addictions,
        pathologies,
        antecedents
      } = req.body;

      const patient = await new Patient({
        id,
        name,
        lastName,
        birthDate,
        gender,
        email,
        job,
        picture,
        address,
        phones,
        currentMedication,
        addictions,
        pathologies,
        antecedents
      });

      await patient.save();
      res.send(patient);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.delete('/api/patients/:id', async (req, res) => {
    try {
      const patient = await Patient.findByIdAndRemove(req.params.id);
      res.send(patient);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.put('/api/patients/:id', async (req, res) => {
    try {
      const pac = await Patient.update({ _id: req.params.id }, req.body);
      console.log(pac);
      //MODIFICAR ESTO PARA RETORNAR LO QUE REALMENTE SUCEDIO
      //HAY QUE VERIFICAR EL RETORNO PARA COMPROBAR QUE REALMENTE HAYA ACTUALIZADO ALGO
      const patient = await Paciente.find();
      res.send(patient);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

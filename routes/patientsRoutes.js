module.exports = (app, mongoose) => {
  const Patient = mongoose.model('patient');

  app.get('/api/patients', async (req, res) => {
    const patient = await Patient.find().populate({
      path: 'socialInsurance._id',
      model: 'socialInsurance'
    });
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
        currentMedication,
        addictions,
        pathologies,
        antecedents,
        address,
        phones,
        socialInsurance
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
        currentMedication,
        addictions,
        pathologies,
        antecedents,
        address,
        phones,
        socialInsurance
      });

      await patient.save();
      res.send(patient);
    } catch (err) {
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
      const pac = await Patient.findByIdAndUpdate(
        req.params.id,
        req.body,
        async (err, pat) => {
          if (err) {
            console.log(err);
          } else {
            console.log(pat);
          }
        }
      );
      //MODIFICAR ESTO PARA RETORNAR LO QUE REALMENTE SUCEDIO
      //HAY QUE VERIFICAR EL RETORNO PARA COMPROBAR QUE REALMENTE HAYA ACTUALIZADO ALGO
      //const patient = await Paciente.find();
      //res.send(patient);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

module.exports = (app, mongoose) => {
	const Paciente = mongoose.model('pacientes');

	app.get('/api/pacientes', async (req, res) => {
		const pacientes = await Paciente.find();
		try {
			res.send(pacientes);
		} catch (err) {
			res.status(500).send(err);
		}
	});

	app.get('/api/pacientes/:id', async (req, res) => {
		try{
			const paciente = await Paciente.findById(req.params.id);
			res.send(paciente);
		}catch(err){
			console.log(err);
			res.status(500).send(err);
		}
	});

	app.post('/api/pacientes', async (req, res) => {
		try {
			const {
				apellido,
				celular,
				fechaNacimiento,
				mail,
				nombre,
				nroDocumento,
				obraSocial,
				sexo,
				telefono,
				direccion
			} = req.body;

			const paciente = await new Paciente({
				nroDocumento,
				nombre,
				apellido,
				fechaNacimiento,
				telefono,
				celular,
				mail,
				direccion,
				sexo,
				obraSocial
			});

			await paciente.save();
			res.send(paciente);
		} catch (err) {
			console.log(err);
			res.status(500).send(err);
		}
	});

	app.delete('/api/pacientes/:id', async (req, res) => {
		try {
			const pac = await Paciente.findByIdAndRemove(req.params.id);
			const pacientes = await Paciente.find();
			res.send(pacientes);
		} catch (err) {
			res.status(500).send(err);
		}
	});

	app.put('/api/pacientes/:id', async (req, res) => {
		try {
			const pac = await Paciente.update({_id: req.params.id},req.body);
			console.log(pac);
			//MODIFICAR ESTO PARA RETORNAR LO QUE REALMENTE SUCEDIO
			//HAY QUE VERIFICAR EL RETORNO PARA COMPROBAR QUE REALMENTE HAYA ACTUALIZADO ALGO
			const pacientes = await Paciente.find();
			res.send(pacientes);
		} catch (err) {
			res.status(500).send(err);
		}
	});
};

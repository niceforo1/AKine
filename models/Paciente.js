const mongoose = require('mongoose');
const direccionSchema = require('./Direccion');
const { Schema } = mongoose;

const pacienteSchema = new Schema({
  nroDocumento: String,
  nombre: String,
  apellido: String,
  fechaNacimiento: Date,
  telefono: String,
  celular: String,
  mail: String,
  direccion: [direccionSchema],
  sexo: String,
  obraSocial: {
    nombre: String,
    nroAfiliado: String
  },
  fechaCreacion: { type: Date, default: Date.now() }
});

mongoose.model('pacientes', pacienteSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const direccionSchema = new Schema({
  calle: String,
  numero: Number,
  piso: String,
  depto: String,
  provincia: String,
  ciudad: String,
  barrio: String,
  cp: String
});

module.exports = direccionSchema;

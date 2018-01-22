const mongoose = require('mongoose');
const addressSchema = require('./address');
const socialInsuranceSchema = require('./socialInsurance');
const phoneSchema = require('./phone');
const { Schema } = mongoose;

const patientSchema = new Schema({
  id: String,
  name: String,
  lastName: String,
  birthDate: Date,
  gender: { type: String, enum: ['m', 'f','o'] },
  email: String,
  job: String,
  picture: String,
  currentMedication: String,
  addictions: String,
  pathologies: String,
  antecedents: {
    personal: String,
    family: String,
    habits: String
  },
  address: addressSchema,
  phones: [phoneSchema],
  socialInsurance: {
      _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'socialInsuranceSchema'},
      number: String,
  }
});

mongoose.model('patient', patientSchema);

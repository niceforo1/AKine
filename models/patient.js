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
  gender: { type: String, enum: ['m', 'f'] },
  email: String,
  job: String,
  picture: String,
  address: addressSchema,
  socialInsurance: [
    {
      type: Schema.ObjectId,
      ref: 'socialInsuranceSchema',
      number: String
    }
  ],
  phones: [phoneSchema],
  currentMedication: String,
  addictions: String,
  pathologies: String,
  antecedents: {
    personal: String,
    family: String,
    habits: String
  }
});

mongoose.model('patient', patientSchema);


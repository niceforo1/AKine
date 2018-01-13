const mongoose = require('mongoose');
const addressSchema = require('./address');
const phoneSchema = require('./phone');
const socialInsuranceSchema = require('./socialInsurance');
const { Schema } = mongoose;

const professionalSchema = new Schema({
  id: String,
  name: String,
  lastName: String,
  birthDate: Date,
  gender: { type: String, enum: ['m', 'f'] },
  email: String,
  picture: String,
  license: String,
  specialities: String,
  address: addressSchema,
  phones: [phoneSchema],
  socialInsurance: [{
      socialInsurance: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'socialInsuranceSchema'},
      number: String,
  }]
});

mongoose.model('professional', professionalSchema);


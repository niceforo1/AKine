const mongoose = require('mongoose');
const addressSchema = require('./address');
const phoneSchema = require('./phone');
const { Schema } = mongoose;

const socialInsuranceSchema = new Schema({
  name: String,
  contact: String,
  email: String,
  address: addressSchema,
  phones: [phoneSchema]
});

module.exports = socialInsuranceSchema;


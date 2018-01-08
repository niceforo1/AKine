const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    street: String,
    city: String,
    state: String,
    neighborhood: String,
    zip: String
});

module.exports = addressSchema;
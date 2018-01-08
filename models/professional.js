const mongoose = require('mongoose');
const addressSchema = require('./address');
const socialInsuranceSchema = require('./socialInsurance');
const phoneSchema = require('./phone');
const {Schema} = mongoose;

const professionalSchema = new Schema({
    id: String,
    name: String,
    lastName: String,
    birthDate: Date,
    gender: {type: String, enum: ['m', 'f']},
    email: String,
    picture: String,
    address: addressSchema,
    socialInsurance: [{
        type: Schema.ObjectId, ref:'socialInsuranceSchema',
        number: String,
    }],
    phones: [phoneSchema],
    license: String,
    specialities:{
        name: String
    },
});

mongoose.model('professional', professionalSchema);
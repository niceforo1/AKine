const mongoose = require('mongoose');
const addressSchema = require('./address');
const phoneSchema = require('./phone');
const {Schema} = mongoose;

const patientSchema = new Schema({
    id: String,
    name: String,
    lastName: String,
    brithDate: Date,
    gender: {type: String, enum: ['m', 'f']},
    email: String,
    job: String,
    picture:String,
    address: addressSchema,
    phones:[phoneSchema],
    currentMedication:String,
    addictions:String,
    pathologies:String,
    antecedents:{
        personal:String,
        family:String,
        habits:String
    },
});

mongoose.model('patient', patientSchema);

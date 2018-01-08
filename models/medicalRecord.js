const mongoose = require('mongoose');
const professionalSchema = require('./professional');
const patientSchema = require('./patient');
const {Schema} = mongoose;

const medicalRecordSchema = new Schema({
    professional: type: Schema.ObjectId, ref:'professionalSchema',
    patient: type: Schema.ObjectId, ref:'patientSchema',
    date: Date,
    medicalRecordType: String,
    weight: Number,
    height: Number,
    bloodPressure: Number,
    physicalExam: String,
    complementaryStudies: String,
    observations: String,
    icd10: String,
    personalNotes: String,
});

mongoose.model('medicalRecord', medicalRecordSchema);
const mongoose = require('mongoose');
const professionalSchema = require('./professional');
const patientSchema = require('./patient');
const { Schema } = mongoose;

const eventSchema = new Schema({
    professional: { type: Schema.ObjectId, ref: 'professionalSchema' },
    patient: { type: Schema.ObjectId, ref: 'patientSchema' },
    consultation_type_id: Number,
    requestDay: String,
    date: Date,
    status: String,
    overSchedule: Boolean,
    spontaneous: Boolean,
    observations: String
});

mongoose.model('event', eventSchema);

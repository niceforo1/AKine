const mongoose = require('mongoose');
const professionalSchema = require('./professional');
const patientSchema = require('./patient');
const { Schema } = mongoose;

const eventSchema = new Schema({
    professionalId: { type: Schema.ObjectId, ref: 'professionalSchema' },
    patientId: { type: Schema.ObjectId, ref: 'patientSchema' },
    consultationTypeId: Number,
    requestDay: String,
    date: Date,
    status: String,
    overSchedule: Boolean,
    spontaneous: Boolean,
    observations: String
});

mongoose.model('event', eventSchema);

const mongoose = require('mongoose');
const professionalSchema = require('./professional');
const { Schema } = mongoose;

const professionalScheduleSchema = new Schema({
  professional: { type: mongoose.Schema.Types.ObjectId, ref: 'professionalSchema' },
  speciality: String,
  hours: {
  	day: Number,
	start: Date,
	end: Date
  },
  nonWorkingDay: {
	type: String,
	start: Date,
	end: Date
  }
});

mongoose.model('professionalSchedule', professionalScheduleSchema);


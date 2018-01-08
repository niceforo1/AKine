const mongoose = require('mongoose');
const {Schema} = mongoose;

const phoneSchema = new Schema({
    type: String,
    number: String,
    main: Boolean
});

module.exports = phoneSchema;
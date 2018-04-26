const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    user: String,
    password: String,
    role: String
});

mongoose.model('user', userSchema);

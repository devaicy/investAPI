const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNo: String,
    country: String,
    password: String,
    value: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);
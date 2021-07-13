const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: 'Please enter your email'
    },
    password: {
        type: String,
        required: 'Please enter a password'
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;
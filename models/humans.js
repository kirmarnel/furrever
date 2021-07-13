const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({

    name: {
        type: String,
        required: 'Please enter your name'
    },
    age: {
        type: Number,
        required: 'Please enter your age'
    },
    gender: {
        type: String,
    },
    bio: {
        type: String,
        required: 'Please enter a bio'
    },
    

})

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;

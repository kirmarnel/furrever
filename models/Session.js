const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    userId: {
        type: Number,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
})


const Session = mongoose.model("Session", SessionSchema);

module.exports = Session;
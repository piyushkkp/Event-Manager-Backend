// models/events.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let eventSchema = new Schema({
    eventName: {
        type: String
    },
    eventDetails: {
        type: String,
        unique: true
    },
    venue: {
        type: String
    }
}, {
    collection: 'events'
})

eventSchema.plugin(uniqueValidator, { message: 'Event already created.' });
module.exports = mongoose.model('Event', eventSchema)
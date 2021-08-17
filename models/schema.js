const mongoose = require('mongoose')
const schema = mongoose.schema

const fitnessSchema = new schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Input Exercise Type Required'
        },
        name: {
            type: String,
            trim: true,
            required: 'Exercise Title Required'
        },
        weight: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
    }]
})

const fitness = mongoose.model('fitness', fitnessSchema);

module.exports = fitness
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
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

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout
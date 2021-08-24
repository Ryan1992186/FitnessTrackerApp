const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FitnessSchema = new Schema({
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

FitnessSchema.methods.setDuration = function () {
    let duration = 0;
    this.exercises.forEach(exercise => {
        duration += exercise.duration;
    });
    this.duration = duration;
};

const Workout = mongoose.model('workout', FitnessSchema);

module.exports = Workout
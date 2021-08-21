const db = require('../models');
const { Workout } = require('../models')

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            }).catch(err => {
                res.status(400).json(err);
            });
    });

    app.post('/api/workouts', async (req, res) => {
        const newWorkout = await Workout.create({
            exercises: [],
            day: new Date(),
        })
        res.json(newWorkout);
    });

    app.put('/api/workouts/:id', async (req, res) => {
        const updateWorkout = await Workout.findOne({
            _id: req.params.id
        });
        updateWorkout.exercises.push(req.body);
        // updateWorkout.setDuration();
        await updateWorkout.save();
        res.json(updateWorkout);
    });
};
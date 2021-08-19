const db = require('../models');

module.exports = (app) => {
    app.get('/api/workout', (req, res) => {
        db.fitness.find({})
            .then(fitness => {
                res.json(fitness);
            }).catch(err => {
                res.status(400).json(err);
            });
    });
};
const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts",(req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ]).then((workoutData) => {
        res.json(workoutData);
    });
});

router.get("/api/workouts/range",(req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ]).sort({_id: -1}).limit(7).then((workoutData) => {
        res.json(workoutData);
    });
});

module.exports = router;
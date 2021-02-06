const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Please enter exercises"
            },
            name: {
                type: String,
                required: "Please enter excercise name"
            },
            duration: {
                type: String,
                required: "Please enter duration of workout"
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ],

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
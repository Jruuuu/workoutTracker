const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
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
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number,
                        
        }
    ],

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },

    exercises: [
      {
        name: {
          type: String,
        },
        type: {
          type: String,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        duration: {
          type: Number,
        },
        distance: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

let Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

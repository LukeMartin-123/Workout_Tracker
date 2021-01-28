const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
  Day: {
    type: Date,
    default: () => new Date()
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
      },
      
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name"
      },

      duration: {
        type: Number,
        required: "Enter an exercise duration"
      },
  
      weight: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      distance: {
        type: Number,
      },
    }]
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;


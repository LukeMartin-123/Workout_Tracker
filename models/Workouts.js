const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
  Day: {
    type: Date,
    default: Date.now
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

      Duration: {
        type: Number,
        required: "Enter an exercise duration"
      },
  
      weight: {
        type: Number,
      },

      Reps: {
        type: Number,
      },

      Sets: {
        type: Number,
      },

      Distance: {
        type: Number,
      },
    }]
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;


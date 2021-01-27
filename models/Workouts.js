const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    Name: {
     type:  String,
     trim: true,
    },

    Weight: {
      type: Number,
    },

    Sets: {
      type: Number,
    },

    Reps: {
      type: Number,
    },

    Distance: {
      type: Number,
    },

    Duration: {
      type: Number,
    },

    timeCreated: {
      type: Date,
      default: Date.now
    },

  });
  
  const Workouts = mongoose.model("Workouts", WorkoutsSchema);
  
  module.exports = Workouts;

// Needs to collections one for resistance and one for cardio

// Resistance: - Collection
    // Name
    // Weight
    // Sets
    // Reps
    // Duration


// Cardio - Collection
    // Name
    // Distance
    // Duration



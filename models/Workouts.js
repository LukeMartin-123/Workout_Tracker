const mongoose = require("mongoose");
const { INTEGER } = require("sequelize/types");
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    Name: {
     type:  String,
     trim: true,
    },

    Weight: {
      type: INTEGER,
    },

    Sets: {
      type: INTEGER,
    },

    Reps: {
      type: INTEGER,
    },

    Distance: {
      type: INTEGER,
    },

    Duration: {
      type: INTEGER,
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



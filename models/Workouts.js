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

    lastUpdated: { 
      type: Date
    },

  });
  
  const Workouts = mongoose.model("Workouts", WorkoutsSchema);
  
  module.exports = Workouts;


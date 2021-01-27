const { db } = require("../models/Workouts");
const Workouts = require("../models/Workouts");

module.exports = function (app) {

    // When I go to to api/workouts I need to find the data from the database
    app.get("/api/workouts", (req, res) => {
        Workouts.find({})
            .then(data => {
                res.join(data)
            })
            .catch(err => {
                res.json(err);
            });
    });

    // When I go to the exercise page, I need to receive the options for a workout

    // When I submit my exercises on the exercise page it needs to populate in the database
    app.post("exercises", ({ body }, res) => {
        Workouts.create(body)
            .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });
    // When I go to the "continue workout" it needs to update the specific workout I was on via the ID.


    // When I go to index it needs to display the last workout that was completed


    // When I go to the stats page it needs to display the cumulation of the last 7 days of workouts
    app.get("/stats"), function (req, res) {
        db.Workouts.find({}, function (error, data) {
            if (error) {
                throw error
            }
            else {
                res.json(data);
            }
        })
    }














}
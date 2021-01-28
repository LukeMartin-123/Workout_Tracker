const { db } = require("../models/Workouts");
const Workouts = require("../models/Workouts");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workouts.find({})
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workouts.create(req.body)
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts:id", (req, res) => {
        db.Workouts.findByIdAndUpdate({
            _id: req.params.id
        },
            {
                $push: {
                    exercises: req.body
                }
            })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err);
            });
    });

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
    app.get("/api/workouts/range"), function (req, res) {
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
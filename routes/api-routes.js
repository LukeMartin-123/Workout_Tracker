//const { db } = require("../models/Workouts");
const Workouts = require("../models/Workouts");

module.exports = function (app) {

    //total duration
    app.get("/api/workouts", (req, res) => {
        Workouts.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration'
                    }
                }
            }
        ])
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err);
            });
    });

    //posts a new works out 
    app.post("/api/workouts", (req, res) => {
        Workouts.create({}) //need to explain how this works
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workouts.findByIdAndUpdate(
            req.params.id,
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

    // app.post("exercises", ({ body }, res) => {
    //     Workouts.create(body)
    //         .then(({ _id }) => User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
    //         .then(dbUser => {
    //             res.json(dbUser);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // });

    app.get('/api/workouts/range', function (req, res) {
        Workouts.aggregate([
          {
            $addFields: {
              totalDuration: {
                $sum: '$exercises.duration'
              }
            }
          }
        ])
          .sort({ _id: -1 })
          .limit(7)
          .then((dbWorkouts) => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
          })
          .catch((err) => {
            res.json(err);
          });
      });
    













}
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workouts = require("./models/Workouts");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { useNewUrlParser: true });




require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});






// app.get("/exercise", ({body}, res) => {
//   const workouts = new Workouts(body);

//   Workouts.create(workouts)
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
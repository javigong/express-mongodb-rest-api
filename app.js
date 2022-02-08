const express = require("express");
const app = express();

const connected = require("./connection.js");

connected.then(() => {
  console.log("connected!");
  const server = app.listen(8080, () => console.log("Listening"));
});

app.use(express.static("public"));

// Parse the form data (with action attribute) with the express.urlenconded middleware:
app.use(express.urlencoded({ extended: true }));
//Parse the form data JSON requests made with axios/ajax
app.use(express.json());

const router = require("./routes/index.js");
app.use("/api", router);

// // Import the animal models, compiled using the schemas we created and they allow us to query the database
// const Animal = require("./models/Animal.js");
// const Plant = require("./models/Plant.js");

// // Set up API endpoints (routes):

// // Creating new plants and animals in the database
// app.post("/api/plants", (req, res) => {
//   let newPlant = new Plant({
//     type: req.body.type, // we get the type from the form input (name=type)
//     hasFruit: req.body.hasFruit, // from the form input (name=hasFruit)
//   });

//   newPlant
//     .save()
//     .then((result) => {
//       // when saved, we response with the data and the url where it is located.
//       res.json({
//         data: newPlant,
//         url: `/api/plants/${newPlant._id}`,
//       });
//     })
//     .catch((error) => res.status(500).send(error));
// });
// app.post("/api/Animals", (req, res) => {
//   let newAnimal = new Animal({
//     type: req.body.type,
//     numberOfLegs: req.body.numberOfLegs,
//   });

//   newAnimal
//     .save()
//     .then((result) => {
//       res.json({
//         data: newAnimal,
//         url: `/api/animals/${newAnimal._id}`,
//       });
//     })
//     .catch((error) => res.status(500).send(error));
// });

// // Get all plants and animals in the database:
// // note: the response send back to the client will be and array
// app.get("/api/plants", (req, res) => {
//   // do query to receive all the plants, and then execute with exec() return a promise
//   Plant.find({})
//     .exec()
//     .then((results) => {
//       res.json(results);
//     })
//     .catch((error) => res.status(500).send(error));
// });
// app.get("/api/animals", (req, res) => {
//   Animal.find({})
//     .exec()
//     .then((results) => {
//       res.json(results);
//     })
//     .catch((error) => res.status(500).send(error));
// });

// // Get a single plant or animals using its ID:
// app.get("/api/plants/:id", (req, res) => {
//   Plant.findOne({ "_id": req.params.id })
//     .exec()
//     .then((results) => {
//       res.json(results);
//     })
//     .catch((error) => res.status(500).json(error));
// });
// app.get("/api/animals/:id", (req, res) => {
//     Animal.findOne({ "_id": req.params.id })
//     .exec()
//     .then((results) => {
//       res.json(results);
//     })
//     .catch((error) => res.status(500).json(error));
// });

// // Challenge: implement PUT, PATCH, AND DELETE methods

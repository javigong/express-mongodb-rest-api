const Plant = require("../models/Plant.js");

const postPlant = (req, res) => {
  let newPlant = new Plant({
    type: req.body.type, // we get the type from the form input (name=type)
    hasFruit: req.body.hasFruit, // from the form input (name=hasFruit)
  });

  newPlant
    .save()
    .then((result) => {
      // when saved, we response with the data and the url where it is located.
      res.json({
        data: newPlant,
        url: `/api/plants/${newPlant._id}`,
      });
    })
    .catch((error) => res.status(500).send(error));
};

const getPlants = (req, res) => {
  // do query to receive all the plants, and then execute with exec() return a promise
  Plant.find({})
    .exec()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => res.status(500).send(error));
};

const getPlant = (req, res) => {
  Plant.findOne({ "_id": req.params.id })
    .exec()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => res.status(500).json(error));
};

module.exports = {
  postPlant,
  getPlants,
  getPlant,
};

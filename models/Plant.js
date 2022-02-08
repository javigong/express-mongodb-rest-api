const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  type: { type: String, required: true, maxLength: 100 },
  hasFruit: { type: Boolean, default: false },
});

const Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant;
